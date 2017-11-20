import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

 gotoLoginPage() {
   this.navCtrl.push('LoginPage');
 }

 presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Email has been sent successfully',
    duration: 3000,
    position: 'top',
    cssClass: "toast-success",
  });
  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });
  toast.present();

}  


  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
  }

}
