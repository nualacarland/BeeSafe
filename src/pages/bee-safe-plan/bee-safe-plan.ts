import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BeeSafePlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bee-safe-plan',
  templateUrl: 'bee-safe-plan.html',
})
export class BeeSafePlanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeeSafePlanPage');
  }

  gotoHelpNowPage(){
    this.navCtrl.push('HelpNowPage');
  }

}
