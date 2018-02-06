import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DistractionsPage } from './distractions';


@NgModule({
  declarations: [
    DistractionsPage,

  ],
  imports: [
    IonicPageModule.forChild(DistractionsPage),
  ],
})
export class DistractionsPageModule {}
