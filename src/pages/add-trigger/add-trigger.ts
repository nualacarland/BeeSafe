import { Trigger } from './../../app/models/Trigger';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, ActionSheetController, Item, ItemSliding } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Camera, DestinationType } from '@ionic-native/camera';
import { Cordova } from '@ionic-native/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';


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
  base64Image: any;
  activeItemSliding: ItemSliding = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, 
              private formBuilder: FormBuilder, private storage: Storage, private camera: Camera, public actionsheetCtrl: ActionSheetController,
            public platform: Platform, public loadingCtrl: LoadingController ) {

    this.userDetails = this.formBuilder.group({

      triggerTitle: ['', Validators.required]

    });
      
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTriggerPage');
  }

  doCancel(){
    this.navCtrl.push('TriggersPage');
  }

  saveNewTriggers(){

    this.storage.get('triggers').then((val) =>{
      console.log('triggers', val);

      if(val == null){

        var newTrigger = [new Trigger(this.userDetails.value.triggerTitle)];

        this.storage.set('triggers', newTrigger);

      } else{
        var tempTrigger: [Trigger] = val;
        var newSingleTrigger : Trigger = new Trigger(this.userDetails.value.triggerTitle);

        tempTrigger.push(newSingleTrigger);
        this.storage.set('triggers', tempTrigger);
        
      }
      console.log('locally stored!');
      this.successToast();
    
      
    });
  }
  
    successToast() {
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
      this.navCtrl.push('TriggersPage');
    } 
  
 
    errorToast() {
      let toast = this.toastCtrl.create({
        message: 'New Trigger - failed.',
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
  
