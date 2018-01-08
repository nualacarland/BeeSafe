import { Triggers } from './../../app/models/triggers';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Platform, LoadingController,  ActionSheetController, Item, ItemSliding } from 'ionic-angular';

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
  activeItemSliding: ItemSliding = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, 
              private formBuilder: FormBuilder, private storage: Storage ) {

    
    this.userDetails = this.formBuilder.group({

      triggerTitle: ['', Validators.required]

    });
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTriggerPage');
  }


  saveNewTriggers(){

    this.storage.get('triggers').then((val) =>{
      console.log('triggers', val);

      if(val == null){

        var newTrigger = [new Triggers(this.userDetails.value.triggerTitle)];

        this.storage.set('triggers', newTrigger);
      } else{
        var tempTrigger: [Triggers] = val;
        var newSingleTrigger : Triggers = new Triggers(this.userDetails.value.triggerTitle);

        tempTrigger.push(newSingleTrigger);
        this.storage.set('triggers', tempTrigger);

      }

      console.log('locally stored!');
      this.navCtrl.push('TriggersPage');
      
  
    });
  
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
