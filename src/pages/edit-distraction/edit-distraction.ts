import { Platform } from 'ionic-angular/platform/platform';
import { Camera } from '@ionic-native/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Distraction } from './../../app/models/distraction';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheet, ActionSheetController, LoadingController, Loading } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';



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
  private _oldDistraction;
  private _oldgalleryPhoto;
  private _oldwebsiteLink;
  private _oldyoutubeLink;
  private _oldSelectedAvatar;

  private items: Distraction;
  private avatarsArray: any;
  private itemList;

    constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, 
      private storage: Storage, private toastCtrl: ToastController, public modalCtrl: ModalController,
    private camera: Camera, public actionsheetCtrl: ActionSheetController, public platform: Platform, public loadingCtrl: LoadingController) {
  
        this.avatarsArray = [
          {
            title: 'avatar1',
            image: 'assets/imgs/avatar-heart.png'
          },
          {
            title: 'avatar2',
            image: 'assets/imgs/avatar-car.png'
          },
          {
            title: 'avatar3',
            image: 'assets/imgs/avatar-flower.png'
          },
          {
            title: 'avatar4',
            image: 'assets/imgs/avatar-star.png'
          },
          {
            title: 'avatar5',
            image: 'assets/imgs/avatar-football.png'
          },
          {
            title: 'avatar6',
            image: 'assets/imgs/avatar-music.png'
          }
        ];

    this.userDetails = this.formBuilder.group({
      
      distractionTitle: [''],
      distraction: [''],
      galleryPhoto: [''],
      websiteLink: [''],
      youtubeLink: ['']

    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditDistractionPage');
    this.getOldStorage();
  }

  gotoHelpNowPage(){
    this.navCtrl.push('HelpNowPage');
  }

 
  getOldStorage(){

   
  
    this.storage.get('distractionTitle').then((value) => {
      this._oldDistractionTitle = value;
        console.log('What is the value', value);
        console.log('what is the old distractionTitle', this._oldDistractionTitle);
        this.userDetails.get('distractionTitle').setValue(this._oldDistractionTitle.distractionTitle);
        
          }).catch((e) => {
            console.log(e);
          });


    this.storage.get('distraction').then((value) => {
      this._oldDistraction = value;
        console.log('What is the value', value);
        console.log('what is the old distraction', this._oldDistraction);
        this.userDetails.get('distraction').setValue(this._oldDistraction.distraction);
  

          }).catch((e) => {
            console.log(e);
          });

         
    this.storage.get('galleryPhoto').then((value) => {
      this._oldgalleryPhoto = value;
        console.log('What is the value', value);
        console.log('what is the old galleryPhoto', this._oldgalleryPhoto);
        this.userDetails.get('contact3Name').setValue(this._oldgalleryPhoto.galleryPhoto);
      
          }).catch((e) => {
            console.log(e);
          });

                
    this.storage.get('websiteLink').then((value) => {
      this._oldwebsiteLink = value;
        console.log('What is the value', value);
        console.log('what is the old websiteLink', this._oldwebsiteLink);
        this.userDetails.get('websiteLink').setValue(this._oldwebsiteLink.websiteLink);
        
          }).catch((e) => {
            console.log(e);
          });

    this.storage.get('avatar').then((value) => {
      this._oldSelectedAvatar = value;
        console.log('What is the avatar', value);
        console.log('what is the old avatar', this._oldSelectedAvatar);
        this.userDetails.get('avatar').setValue(this._oldSelectedAvatar.avatars);


          }).catch((e) => {
            console.log(e);
          });

  this.storage.get('youtubeLink').then((value) => {
    this._oldyoutubeLink = value;
      console.log('What is the value', value);
      console.log('what is the old youtubeLink', this._oldyoutubeLink);
      this.userDetails.get('youtubeLink').setValue(this._oldyoutubeLink.youtubeLink);
      
        }).catch((e) => {
          console.log(e);
        });          
     
    
  }

  editLocalShit() { 

     // private _oldDistractionTitle;
    // private _oldDistraction;
    // private _oldgalleryPhoto;
    // private _oldwebsiteLink;
    // private _oldyoutubeLink;

    this.storage.set('distractionTitle', this.userDetails.value.distractionTitle);
    this.storage.set('distraction', this.userDetails.value.distraction);
    this.storage.set('galleryPhoto', this.userDetails.value.galleryPhoto);
    this.storage.set('websiteLink', this.userDetails.value.websiteLink);
    this.storage.set('youtubeLink', this.userDetails.value.youtubeLink);

    this.presentToast();
    console.log('new avatar', this.userDetails.value.avatars);
    console.log('Local storage edited!');
    this.navCtrl.push('DistractionsPage');

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


    
