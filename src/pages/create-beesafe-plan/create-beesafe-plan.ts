import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreateBeesafePlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-beesafe-plan',
  templateUrl: 'create-beesafe-plan.html',
})
export class CreateBeesafePlanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateBeesafePlanPage');
  }
  gotoHelpNowPage(){
    this.navCtrl.push('HelpNowPage');
  }

}
