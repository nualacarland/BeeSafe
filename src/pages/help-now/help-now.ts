import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { CallNumber } from '@ionic-native/call-number';


/**
 * Generated class for the HelpNowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help-now',
  templateUrl: 'help-now.html',
})
export class HelpNowPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gotoDashboardPage() {
    this.navCtrl.push('DashboardPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpNowPage');
  }



}
