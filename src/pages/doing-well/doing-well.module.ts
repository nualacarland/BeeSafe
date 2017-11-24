import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoingWellPage } from './doing-well';

@NgModule({
  declarations: [
    DoingWellPage,
  ],
  imports: [
    IonicPageModule.forChild(DoingWellPage),
  ],
})
export class DoingWellPageModule {}
