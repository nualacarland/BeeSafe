import { Platform } from 'ionic-angular/platform/platform';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Distraction } from './../../app/models/distraction';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheet, ActionSheetController, LoadingController, Loading } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Camera, DestinationType } from '@ionic-native/camera';
import { toBase64String } from '@angular/compiler/src/output/source_map';

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

  private userDetails: FormGroup;
  base64Image: any;
 
  private _oldDistractionTitle;
  private _oldDistractions;
  private _oldGalleryImg;
  private _oldWebsiteLink;
  private _oldYoutubeLink;

  private oldDistraction: [Distraction];
  private distractionIndex: any;
 
  private emojiArray: any;


    constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, 
      private storage: Storage, private toastCtrl: ToastController, public modalCtrl: ModalController,
    private camera: Camera, public actionsheetCtrl: ActionSheetController, public platform: Platform,
     public loadingCtrl: LoadingController) {

      this.emojiArray = [
        {
          title: 'emojiNotBad',
          image: 'assets/imgs/emoji-not-bad.png'
        },
        {
          title: 'emojiSupport',
          image: 'assets/imgs/emoji-need-support.png'
        },
        {
          title: 'emojiStruggling',
          image: 'assets/imgs/emoji-really-struggling.png'
        }

      ];
    

        this.distractionIndex = this.navParams.get('distractionIndex');

    console.log('WHAT WAS THE TRIGGER INDEX PASSED IN', this.distractionIndex);
  
    this.userDetails = this.formBuilder.group({
      
      emojis: [''],
      distractionTitle: [''],
      distraction: [''],
      galleryPhoto: [''],
      websiteLink: [''],
      youtubeLink: ['']

    });
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditDistractionPage');
    console.log('WHAT WAS THE TRIGGER INDEX PASSED IN', this.distractionIndex);

   this.getOldStorage();
  }

  showConfirmAlert(selectedRadio: any){
    console.log('what is the saved emojis', this.userDetails.value.emojis);
  
  }


  getOldStorage(){
    this.storage.get('distractions').then((val) => {
      console.log('What is the value of the distraction', val);
      this.oldDistraction = val;
      console.log('What is the value!!!!', val);
      this.userDetails.get('emojis').setValue(this.oldDistraction[this.distractionIndex].emojis);
      this.userDetails.get('distractionTitle').setValue(this.oldDistraction[this.distractionIndex].distractionTitle);
      this.userDetails.get('distraction').setValue(this.oldDistraction[this.distractionIndex].distraction);
      this.userDetails.get('websiteLink').setValue(this.oldDistraction[this.distractionIndex].websiteLink);
      this.userDetails.get('youtubeLink').setValue(this.oldDistraction[this.distractionIndex].youtubeLink); 

      console.log('what is the old saved emoji', this.userDetails.value.emojis);
      
  
      console.log(this.oldDistraction);
    })
  }

  editLocalShit(){

    if(this.userDetails.value.distractionTitle == '' ){
    
      this.errorToast();
    }else{
      this.presentToast();
      console.log('Local Storage Changed!');
      this.storage.get('distractions').then((val) => {
        var tempDistraction = val;
        tempDistraction[this.distractionIndex].emojis = this.userDetails.value.emojis;
        tempDistraction[this.distractionIndex].distractionTitle = this.userDetails.value.distractionTitle;
        tempDistraction[this.distractionIndex].distraction = this.userDetails.value.distraction;
        tempDistraction[this.distractionIndex].websiteLink = this.userDetails.value.websiteLink;
        tempDistraction[this.distractionIndex].youtubeLink = this.userDetails.value.youtubeLink;
        this.storage.set('distractions',tempDistraction);
        


        this.navCtrl.pop();
      })
    
    }
    
    }






accessGallery(){
  this.camera.getPicture({
    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
    destinationType: this.camera.DestinationType.DATA_URL
   }).then((sourcePath) => {
     this.base64Image = 'data:image/jpeg;base64,' +sourcePath;
     console.log('Image has been selected', this.camera.DestinationType.DATA_URL );

    }, (err) => {
     console.log(err);
     console.log('error');
   });
 }
  

  errorToast() {
  let toast = this.toastCtrl.create({
    message: 'Error - Please Edit or Cancel',
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
  message: 'Distraction Successfully Edited!',
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


    
