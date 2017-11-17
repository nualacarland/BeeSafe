import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTriggerPage } from './add-trigger';

@NgModule({
  declarations: [
    AddTriggerPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTriggerPage),
  ],
})
export class AddTriggerPageModule {}
