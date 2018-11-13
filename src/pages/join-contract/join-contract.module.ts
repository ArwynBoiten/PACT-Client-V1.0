import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoinContractPage } from './join-contract';
import { Keyboard } from '@ionic-native/keyboard';


@NgModule({
  declarations: [
    JoinContractPage,
  ],
  providers: [
    Keyboard
  ],
  imports: [
    IonicPageModule.forChild(JoinContractPage),
  ],
})
export class ScanCodePageModule {}
