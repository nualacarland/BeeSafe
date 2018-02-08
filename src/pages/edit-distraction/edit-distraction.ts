import { FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Distraction } from './../../app/models/distraction';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  private distractionIndex: any;
  private distractions: [Distraction];

  private userDetails: FormGroup;

  private _oldDistractionTitle;
  private _oldDistraction;
  private _oldgalleryPhoto;
  private _oldwebsiteLink;
  private _oldyoutubeLink;

 

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public formBuilder: FormBuilder, private toastCtrl: ToastController) {
   this.distractionIndex = this.navParams.get('distractionIndex');
   console.log('what was the distraction index passed in', this.distractionIndex);

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
    console.log('What was the distraction index passed in', this.distractionIndex);
    this.getOldStorage();
    
  }


  getOldStorage(){
    this.storage.get('distraction').then((val) =>{
      console.log("what is the value of the distraction", val);
      this.distractions = val;
      this.userDetails.get('distractionTitle').setValue(this.distractions[this.distractionIndex].distractionTitle);
      console.log(this.distractions);
    })
  }

  editLocalShit(){
  
  if(this.userDetails.value.distractionTitle == ''){
  
    this.errorToast();
  }else{
    this.presentToast();
    console.log('Local Storage Changed!');
    this.storage.get('distractions').then((val) =>{
      var tempDistraction = val;
      tempDistraction[this.distractionIndex].distractionTitle = this.userDetails.value.distractionTitle;
      this.storage.set('distractions', tempDistraction);
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


    
  
  












  // getOldStorage(){
  //   this.storage.get('distractionTitle').then((value) =>{
  //     this._oldDistractionTitle = value;
  //     console.log('What is the value', value);
  //     console.log('what is the old distraction title', this._oldDistractionTitle);
  //     this.userDetails.get('distractionTitle').setValue(this._oldDistractionTitle);
      
  //     }).catch((e) =>{
  //           console.log(e);
  //         });

  //    this.storage.get('distraction').then((value) =>{
  //      this._oldDistraction = value;
  //      console.log('what is the value', value);
  //      console.log('what is the old distraction', this._oldDistraction);
  //      this.userDetails.get('distraction').setValue(this._oldDistraction);
     
  //     }).catch((e) =>{
  //      console.log(e);
  //    });

  //    this.storage.get('oldgalleryPhoto').then((value) =>{
  //      this._oldgalleryPhoto = value;
  //      console.log('what is the value', value);
  //      console.log('what is the old photo', this._oldgalleryPhoto);
  //      this.userDetails.get('oldgalleryPhoto').setValue(this._oldgalleryPhoto);

  //    }).catch((e) =>{
  //      console.log(e);
  //    });

  //    this.storage.get('oldwebsiteLink').then((value) =>{
  //     this._oldwebsiteLink = value;
  //     console.log('what is the value', value);
  //     console.log('what is the old web link', this._oldwebsiteLink);
  //     this.userDetails.get('oldwebsiteLink').setValue(this._oldwebsiteLink);

  //   }).catch((e) =>{
  //     console.log(e);
  //   });

  //   this.storage.get('oldyoutubeLink').then((value) =>{
  //     this._oldyoutubeLink= value;
  //     console.log('what is the value', value);
  //     console.log('what is the old youtube link', this._oldyoutubeLink);
  //     this.userDetails.get('oldyoutubeLink').setValue(this._oldyoutubeLink);

  //   }).catch((e) =>{
  //     console.log(e);
  //   });

    
  // }

  // editLocalShit() {

  //   if( this.userDetails.value.distractionTitle != this._oldDistractionTitle){
  //     this.storage.set('distractionTitle', this.userDetails.value.distractionTitle);
  //   }else{
  //     console.log('DistractionTitle was not changed');
  //   }

  //   if(this.userDetails.value.distraction != this._oldDistraction){
  //     this.storage.set('distraction', this.userDetails.value.distraction);
  //   }else{
  //     console.log('Distraction was not changed');
  //   }

  //   if(this.userDetails.value.galleryPhoto != this._oldgalleryPhoto){
  //     this.storage.set('galleryPhoto', this.userDetails.value.galleryPhoto);
  //   }else{
  //     console.log('Gallery photo was not changed');
  //   }

  //   if(this.userDetails.value.youtubeLink != this._oldyoutubeLink){
  //     this.storage.set('youtubeLink', this.userDetails.value.youtubeLink);
  //   }else{
  //     console.log('Youtube Link was not changed!');
  //   }



  // }


   // this.passedDistractionIndex = this.navParams.get('distractionIndex');

    // this.storage.get('distractions').then((val)=>{

      // this.distraction = val[this.passedDistractionIndex];
      //TODO: Get the distractions array from storage
      //use the passed in array index to find which one we need
    //   //distractionsArray[this.passedDistractionIndex]

    //   console.log(this.distraction);

    // });

    // console.log(this.navParams.get('distractionIndex'));

  






  // editDistraction(){
  //   this.storage.get('distractions').then((val)=>{

  //     this.distraction.distractionInfo = this.userDetails.distractionTitle;
  //     this.distraction.distractionInfo = this.userDetails.distraction;
  //     this.distraction.distractionInfo = this.userDetails.galleryPhoto;
  //     this.distraction.distractionInfo = this.userDetails.websiteLink;
  //     this.distraction.distractionInfo = this.userDetails.youtubeLink;
  //     // this.distraction.distractionInfo = "newshit";
 
  //     var tempArray = val;

  //     tempArray[this.passedDistractionIndex] = this.distraction;

  //     this.storage.set('distractions', tempArray);
  //     console.log(this.distraction);

  //   });



  // }


