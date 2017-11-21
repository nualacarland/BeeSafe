import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the AddTriggerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-trigger',
  templateUrl: 'add-trigger.html',
})
export class AddTriggerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTriggerPage');
  }

  gotoTriggersPage() {
    this.navCtrl.push('TriggersPage');
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'New Trigger saved successfully',
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
