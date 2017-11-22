import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TriggerModalPage } from './trigger-modal';

@NgModule({
  declarations: [
    TriggerModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TriggerModalPage),
  ],
})
export class TriggerModalPageModule {}
