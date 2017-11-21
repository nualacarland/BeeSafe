import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DistractionsInfoModalPage } from './distractions-info-modal';

@NgModule({
  declarations: [
    DistractionsInfoModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DistractionsInfoModalPage),
  ],
})
export class DistractionsInfoModalPageModule {}
