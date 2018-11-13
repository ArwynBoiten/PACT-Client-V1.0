import { Component } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { SocketProvider } from "../../providers/socket";
import { Session } from "../new-contract/models/session";
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ScanCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'join-contract',
  templateUrl: 'join-contract.html',
})
export class JoinContractPage {

  tempModel: any[] = [null, null, null, null, null, null];
  session: Session;
  currentScreen: any;
  member: any;
  memberIndex: any;
  steps: number = 0;
  status: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private keyboard: Keyboard,
              public alertCtrl: AlertController, public storage: Storage) {
    this.session = new Session();

    this.storage.get('member').then((member) => {
      this.member = member;
      this.setCurrentScreen("code");
    });

    SocketProvider.socket.on('errorMessage', (message) => {
      this.showErrorAlert(message);
    });

    SocketProvider.socket.on('session', (session) => {
      this.session = session;
      this.steps++;

      if(this.steps == 1){
        this.memberIndex = (this.session.members.length - 1);
        this.setCurrentScreen("input");
      }

      if(this.steps == 2){
        this.setCurrentScreen("lobby");
      }

      if(this.steps == 3){
        this.setCurrentScreen("contract");
      }
    });

    SocketProvider.socket.on('contract', (contract) => {
      this.setCurrentScreen("loading");
    });

    SocketProvider.socket.on('status', (status) => {
      this.status = status;
    });
  }

  signContract(){
    SocketProvider.socket.emit("signContract", this.session.id);
    this.setCurrentScreen("loading");
    this.status = "Wachten op medepartijen";

  }

  joinSessionListener(){
    this.collectRequiredData();

    SocketProvider.socket.emit("updateSession", this.session);
  }

  collectRequiredData(){
    for(let field of this.session.members[this.memberIndex].role.fields){
      if(field.type == "object"){
        let temp = [];

        for(let inField of field.fields){
          temp.push({[inField.name]: inField.data})
        }

        this.session.data.push({[field.name]: temp});
      } else {
        this.session.data.push({[field.name]: field.data});
      }
    }
    return this.session.data;
  }

  joinSession() {
    let inputID = this.getDigitValue();

    if(inputID.length >= 6) {
      console.log("Join session: " + inputID);
      SocketProvider.socket.emit("joinSession", {id: inputID, member: this.member});
    }
  }

  showKeyboard(){
    this.keyboard.show();
  }

  moveFocus(currentID) {
    let nextElement = document.getElementById('in-' + (currentID + 1));

    if (currentID != "6") {
      nextElement.focus();
    }
  }

  showErrorAlert(message) {
    const alert = this.alertCtrl.create({
      title: 'Foutmelding!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  getDigitValue(){
    let value = "";

    for(let digit of this.tempModel){
      if(digit != null) {
        value += digit;
      }
    }

    return value;
  }

  setCurrentScreen(_screen){
    this.currentScreen = _screen;
  }

  memberCount(){
    return this.session.members.length || 0;
  }
}
