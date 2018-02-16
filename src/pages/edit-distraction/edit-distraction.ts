import { Platform } from 'ionic-angular/platform/platform';
import { Camera } from '@ionic-native/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Distraction } from './../../app/models/distraction';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheet, ActionSheetController, LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';




/**
 * Generated class for the EditDistractionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-distraction',
  templateUrl: 'edit-distraction.html',
})
export class EditDistractionPage {

  // private distractionIndex: Distraction;
  private userDetails: FormGroup;
  base64Image: any;
  private chosenIndex;
  private items: Distraction;



  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public formBuilder: FormBuilder, private toastCtrl: ToastController,
              private camera: Camera, public actionsheetCtrl: ActionSheetController, public platform: Platform, public loadingCtrl: LoadingController) {
  
    this.userDetails = this.formBuilder.group({
      
      distractionTitle: [''],
      distraction: [''],
      galleryPhoto: [''],
      websiteLink: [''],
      youtubeLink: ['']

    });
  }


  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad EditDistractionPage');
  //   console.log('What was the distraction index passed in', this.chosenDistraction);
  // }

  ionViewDidEnter(){
    this.chosenIndex = this.navParams.get('chosenIndex');
    this.items = this.navParams.get('items');


   console.log('Right whats in here');
   console.log(this.chosenIndex);
   console.log(this.items);
    this.userDetails.get('distractionTitle').setValue(this.items.distractionTitle);
    this.userDetails.get('distraction').setValue(this.items.distraction);
    this.userDetails.get('galleryPhoto').setValue(this.items.galleryPhoto);
    this.userDetails.get('websiteLink').setValue(this.items.websiteLink);
    this.userDetails.get('youtubeLink').setValue(this.items.youtubeLink);

  }


  gotoHelpNowPage(){
    this.navCtrl.push('HelpNowPage');
  }

  EditDistraction() {
    this.storage.get('Distraction').then((val) => {
    console.log('Distraction ',val);

    if(val == null){

      var storedDistraction =  [new Distraction(this.userDetails.value.distractionTitle, 
        this.userDetails.value.distractionInfo,
        this.userDetails.value.memoryInfo,
        this.userDetails.value.galleryImg,
        this.userDetails.value.youtubeLink)];

        this.storage.set('Distraction', storedDistraction);
      
        }else {
          

        var tempDistraction: [Distraction] = val;
        tempDistraction[this.chosenIndex].distractionTitle = this.userDetails.value.distractionTitle;
        tempDistraction[this.chosenIndex].distraction = this.userDetails.value.distraction;
        tempDistraction[this.chosenIndex].galleryPhoto = this.userDetails.value.galleryPhoto;
        tempDistraction[this.chosenIndex].websiteLink = this.userDetails.value.websiteLink;
        tempDistraction[this.chosenIndex].youtubeLink = this.userDetails.value.youtubeLink;
        this.storage.set('Distraction', tempDistraction);

        }

   console.log('Locally Updated!');
   this.navCtrl.setRoot('DistractionsPage');
   
 });
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


    
  
  











