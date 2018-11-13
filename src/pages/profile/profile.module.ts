import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import {Person} from "./models/person";


@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
})
export class ProfilePageModule {}
