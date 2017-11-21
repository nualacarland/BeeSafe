import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the AddDistractionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-distraction',
  templateUrl: 'add-distraction.html',
})
export class AddDistractionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDistractionPage');
  }

  gotoPlan() {
    this.navCtrl.push('CreateBeesafePlanPage');
  }

  successToast() {
    let toast = this.toastCtrl.create({
      message: 'New Distraction saved successfully',
      duration: 3000,
      position: 'top',
      cssClass: "toast-success",
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  } 

  saveDistraction(message){
    if(message == 'success'){
      this.successToast();
    }else{
      this.errorToast();
    }
  }

  errorToast() {
    let toast = this.toastCtrl.create({
      message: 'New Distraction - failed.',
      duration: 20000,
      position: 'top',
      cssClass: 'toast-error',
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  } 

}
