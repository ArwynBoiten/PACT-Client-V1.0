import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {


  personList: any[];
  selectedPerson: any;
  showProfilePreset: boolean;
  storage: Storage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _storage: Storage) {

    this.storage = _storage;

    this.storage.get('members').then((val) => {
      this.personList = val;
      console.log(val);
    });


    this.showProfilePreset = true;
  }

  ionViewDidLoad() {
    /*let person = JSON.parse(localStorage.getItem('PERSON'));
    if (person){
      this.person = person;
      this.age = this.getAge(this.person.birthdate);
      this.dob = new Date(this.person.birthdate).toISOString();
    }*/
  }

  choosePerson(_person){
    this.storage.set("member", _person);
    this.selectedPerson = _person;

    this.closePreset();
  }

  openPreset(){
    this.showProfilePreset = true;
  }

  closePreset(){
    this.showProfilePreset = false;
  }

}
