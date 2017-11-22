import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScrapbookMemoryPage } from './scrapbook-memory';

@NgModule({
  declarations: [
    ScrapbookMemoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ScrapbookMemoryPage),
  ],
})
export class ScrapbookMemoryPageModule {}
