import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanModalPage } from './plan-modal';

@NgModule({
  declarations: [
    PlanModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanModalPage),
  ],
})
export class PlanModalPageModule {}
