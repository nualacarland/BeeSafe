import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { PlanModalPage } from '../plan-modal/plan-modal';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateBeesafePlanPage');
  }
  gotoHelpNowPage(){
    this.navCtrl.push('HelpNowPage');
  }

  gotoTriggersPage() {
    this.navCtrl.push('TriggersPage');
  }
  gotoDistractionsPage() {
    this.navCtrl.push('DistractionsPage');
  }

  openModal() {
    let myModal = this.modalCtrl.create(PlanModalPage);
    myModal.present();
  }

}
