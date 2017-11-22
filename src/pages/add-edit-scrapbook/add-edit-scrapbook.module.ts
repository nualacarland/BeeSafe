import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEditScrapbookPage } from './add-edit-scrapbook';

@NgModule({
  declarations: [
    AddEditScrapbookPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEditScrapbookPage),
  ],
})
export class AddEditScrapbookPageModule {}
