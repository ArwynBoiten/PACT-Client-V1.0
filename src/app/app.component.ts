import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SocketProvider } from '../providers/socket';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  members: any[] = [
    { 
      name: "", 
      publicKey: "", 
      privateKey: "", 
      role: "" 
    },
    {
      name: "",
      publicKey: "",
      privateKey: "",
      role: ""
    }
  ];


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    SocketProvider.establish(() => {
      console.info("Connected with server socket.")
    })


    storage.set('members', this.members);
  }
}

