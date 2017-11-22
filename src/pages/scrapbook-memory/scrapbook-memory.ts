import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScrapbookMemoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scrapbook-memory',
  templateUrl: 'scrapbook-memory.html',
})
export class ScrapbookMemoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScrapbookMemoryPage');
  }

  gotoHelpNow() {
    this.navCtrl.push('HelpNowPage');
  }

  gotoEdit() {
    this.navCtrl.push('AddEditScrapbookPage');
  }

}
