import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TriggersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-triggers',
  templateUrl: 'triggers.html',
})
export class TriggersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TriggersPage');
  }

  gotoAddTriggerPage() {
    this.navCtrl.push('AddTriggerPage');
  }

  gotoHelpNow() {
    this.navCtrl.push('HelpNowPage');
  }
  gotoCreateMyBeeSafePlan() {
    this.navCtrl.push('CreateBeesafePlanPage');
  }
}
