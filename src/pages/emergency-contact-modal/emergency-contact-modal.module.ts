import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmergencyContactModalPage } from './emergency-contact-modal';

@NgModule({
  declarations: [
    EmergencyContactModalPage,
  ],
  imports: [
    IonicPageModule.forChild(EmergencyContactModalPage),
  ],
})
export class EmergencyContactModalPageModule {}
