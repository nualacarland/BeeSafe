import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditScrapbookPage } from './edit-scrapbook';

@NgModule({
  declarations: [
    EditScrapbookPage,
  ],
  imports: [
    IonicPageModule.forChild(EditScrapbookPage),
  ],
})
export class EditScrapbookPageModule {}
