import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { Trigger } from '../../app/models/Trigger';


/**
 * Generated class for the UpdateTriggerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-trigger',
  templateUrl: 'update-trigger.html',
})
export class UpdateTriggerPage {

  private userDetails : FormGroup;
  private _oldTriggerTitle;
  private _oldTriggers: [Trigger];
  private triggerIndex : any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private storage: Storage, private toastCtrl: ToastController) {
    this.triggerIndex = this.navParams.get('triggerIndex');

    console.log('WHAT WAS THE TRIGGER INDEX PASSED IN', this.triggerIndex);
    this.userDetails = this.formBuilder.group({

      triggerTitle: ['']
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateTriggerPage');
    console.log('WHAT WAS THE TRIGGER INDEX PASSED IN', this.triggerIndex);
    this.getOldStorage();
  }

  gotoHelpNow(){
    this.navCtrl.push('HelpNowPage');
  }


getOldStorage(){
  this.storage.get('triggers').then((val) => {
    console.log('What is the value of the trigger', val);
    this._oldTriggers = val;
    this.userDetails.get('triggerTitle').setValue(this._oldTriggers[this.triggerIndex].triggerTitle);
    console.log(this._oldTriggers);
  })
}

editLocalShit(){

if(this.userDetails.value.triggerTitle == ''){

  this.errorToast();
}else{
  this.presentToast();
  console.log('Local Storage Changed!');
  this.storage.get('triggers').then((val) => {
    var tempTriggers = val;
    tempTriggers[this.triggerIndex].triggerTitle = this.userDetails.value.triggerTitle;
    this.storage.set('triggers',tempTriggers);
    
    this.navCtrl.pop();
  })

}

}

errorToast() {
  let toast = this.toastCtrl.create({
    message: 'Please enter Pin',
    duration: 2000,
    position: 'top',
    cssClass: 'toast-error',
  });
  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });
  toast.present();
} 


presentToast() {
let toast = this.toastCtrl.create({
  message: 'Profile Successfully Changed!',
  duration: 2000,
  position: 'top',
  cssClass: "toast-success",
});
toast.onDidDismiss(() => {
  console.log('Dismissed toast');
});
toast.present();
}  


  

}


