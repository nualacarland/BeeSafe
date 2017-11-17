import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDistractionPage } from './add-distraction';

@NgModule({
  declarations: [
    AddDistractionPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDistractionPage),
  ],
})
export class AddDistractionPageModule {}
