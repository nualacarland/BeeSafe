import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScrapbookDetailsPage } from './scrapbook-details';

@NgModule({
  declarations: [
    ScrapbookDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ScrapbookDetailsPage),
  ],
})
export class ScrapbookDetailsPageModule {}
