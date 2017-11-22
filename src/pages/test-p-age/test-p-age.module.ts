import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPAgePage } from './test-p-age';

@NgModule({
  declarations: [
    TestPAgePage,
  ],
  imports: [
    IonicPageModule.forChild(TestPAgePage),
  ],
})
export class TestPAgePageModule {}
