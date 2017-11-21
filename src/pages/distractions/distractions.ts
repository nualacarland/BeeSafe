import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { DistractionsInfoModalPage } from '../distractions-info-modal/distractions-info-modal';


/**
 * Generated class for the DistractionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-distractions',
  templateUrl: 'distractions.html',
})
export class DistractionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DistractionsPage');
  }

  openModal() {
    let myModal = this.modalCtrl.create(DistractionsInfoModalPage);
    myModal.present();
  }
  gotoHelpNowPage() {
    this.navCtrl.push('HelpNowPage');
  }
  gotoCreateBeeSafePlanPage() {
    this.navCtrl.push('CreateBeesafePlanPage');
  }

  gotoAddDistractionPage() {
    this.navCtrl.push('AddDistractionPage');

  }

}
