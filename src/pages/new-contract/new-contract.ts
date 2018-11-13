import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { SocketProvider } from '../../providers/socket'
import { Session } from "./models/session";
import { Preset } from "./models/preset";
import { Storage } from '@ionic/storage';

/**
 * Generated class for the NewContractPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-contract',
  templateUrl: 'new-contract.html'
})
export class NewContractPage {

  showInputScreen: boolean = true;
  showInviteScreen: boolean = false;

  presets: Preset[];
  session: Session;

  member: any;
  data: any[] = [];
  currentScreen: any;
  signed: boolean = false;
  status: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertCtrl: AlertController) {
    this.session = new Session();

    this.storage.get('member').then((member) => {
      this.member = member;
      this.setScreen("input");
    });


    SocketProvider.socket.emit("createSession", { id: this.session.id,  member: this.member });

    SocketProvider.socket.on('presets', (presets) => {
      this.presets = Object.keys(presets).map(key => presets[key]);
    });

    SocketProvider.socket.on('session', (_session) => {
      this.session = _session;

      if(this.currentScreen == "contract"){
        console.log(this.session);
      }
    });

    SocketProvider.socket.on('contract', (contract) => {
      this.setScreen("loading");
      this.status = "Wachten op medepartijen op ondertekenen";
    });

    SocketProvider.socket.on('status', (status) => {
      this.status = status;
    })

    SocketProvider.socket.on('errorMessage', (error) => {
      console.log(error);
      this.showErrorAlert(error);
    })
  }

  collectRequiredData(){
    for(let field of this.member.role.fields){
      if(field.type == "object"){
        let temp = []

        for(let inField of field.fields){
          temp.push({[inField.name]: inField.data})
        }

        this.data.push({[field.name]: temp});
      } else {
        this.data.push({[field.name]: field.data});
      }
    }
    return this.data;
  }

  generateContract(){
    SocketProvider.socket.emit("generateContract", this.session.id);
    this.setScreen("contract");
  }

  signContract(){
    SocketProvider.socket.emit("signContract", this.session.id);
    this.signed = true;
  }

  createSessionListener() {
    this.session.members = [this.member];
    this.session.data = this.collectRequiredData();

    SocketProvider.socket.emit("updateSession", this.session);
    this.setScreen("lobby");
  }

  memberCount(){
    return this.session.members.length || 0;
  }

  setScreen(_screen){
    this.currentScreen = _screen;
  }

  showErrorAlert(message) {
    const alert = this.alertCtrl.create({
      title: 'Foutmelding!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
}
