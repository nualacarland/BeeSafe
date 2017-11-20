import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { EmergencyContactModalPage } from '../emergency-contact-modal/emergency-contact-modal';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  gotoDashboardPage() {
    this.navCtrl.push('DashboardPage');
  }

 
  openModal() {
    let myModal = this.modalCtrl.create(EmergencyContactModalPage);
    myModal.present();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Account was created successfully',
      duration: 3000,
      position: 'top',
      cssClass: "toast-success",
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();

  }  
}
