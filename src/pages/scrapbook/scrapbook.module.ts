import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScrapbookPage } from './scrapbook';

@NgModule({
  declarations: [
    ScrapbookPage,
  ],
  imports: [
    IonicPageModule.forChild(ScrapbookPage),
  ],
})
export class ScrapbookPageModule {}
