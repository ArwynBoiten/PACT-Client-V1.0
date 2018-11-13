import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SessionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-session',
  templateUrl: 'session.html',
})
export class SessionPage {

  session: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.session);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SessionPage');
  }

}
