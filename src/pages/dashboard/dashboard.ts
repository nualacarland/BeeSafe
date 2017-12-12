import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  gotoHelpNowPage(){
    this.navCtrl.push('HelpNowPage');
  }
  gotoBeeSafePlanPage() {
    this.navCtrl.push('BeeSafePlanPage');
  }
  gotoScrapbookPage() {
    this.navCtrl.push('ScrapbookPage');
  }
  gotoCreateBeesafePlanPage() {
    this.navCtrl.push('CreateBeesafePlanPage');
  }

}
