import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

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

  private userDetails : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private formBuilder: FormBuilder, private storage: Storage) {

    storage.get('newTrigger').then((val) => {
      console.log('newTrigger ',val);
      
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTriggerPage');
  }

  
  saveNewTrigger() {
    this.storage.set('newTrigger', this.userDetails.value.newTrigger);
    console.log('this is the new Trigger saved ->', this.userDetails.value.newTrigger);

    this.presentToast();
    console.log('Locally stored!');
  }


  gotoTriggersPage() {
    this.navCtrl.push('TriggersPage');
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'New Trigger saved Successfully!',
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
