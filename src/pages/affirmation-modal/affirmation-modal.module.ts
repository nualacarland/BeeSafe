import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AffirmationModalPage } from './affirmation-modal';

@NgModule({
  declarations: [
    AffirmationModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AffirmationModalPage),
  ],
})
export class AffirmationModalPageModule {}
