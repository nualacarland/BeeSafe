import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TriggersPage } from './triggers';

@NgModule({
  declarations: [
    TriggersPage,
  ],
  imports: [
    IonicPageModule.forChild(TriggersPage),
  ],
})
export class TriggersPageModule {}
