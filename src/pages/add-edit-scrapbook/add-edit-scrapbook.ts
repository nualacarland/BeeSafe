import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Memory } from './../../app/models/Memory';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { Platform } from 'ionic-angular/platform/platform';
import { Camera, DestinationType } from '@ionic-native/camera';


/**
 * Generated class for the AddEditScrapbookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-edit-scrapbook',
  templateUrl: 'add-edit-scrapbook.html',
})
export class AddEditScrapbookPage {

  private userDetails : FormGroup;
  base64Image: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private formBuilder: FormBuilder, private storage: Storage,
              private camera: Camera, public actionsheetCtrl: ActionSheetController, public platform: Platform, public loadingCtrl: LoadingController) {


                if(this.navParams.get('chosenIndex')){

                }

                if(this.navParams.get('chosenMemory')){

                }

    this.userDetails = this.formBuilder.group({
      
              scrapbookTitle: ['', Validators.required],
              dateAdded: [''],
              memoryInfo: [''],
              galleryImg: [''],
              youtubeLink: ['']
              
            });

  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEditScrapbookPage');
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

  saveMemory() {
    this.storage.get('Memory').then((val) => {
       console.log('Memory ',val);
   
       if(val == null){
   
         var newMemory =  [new Memory(this.userDetails.value.scrapbookTitle, 
           this.userDetails.value.dateAdded,
           this.userDetails.value.memoryInfo,
           this.userDetails.value.galleryImg,
           this.userDetails.value.youtubeLink)];
   
           this.storage.set('Memory', newMemory);
       } else{
         var tempMemory: [Memory] = val;
         //So make an array of memories equal to what is in the local storage
         //Then select the one you want by the chosenIndex that you pass in 
         //so something like tempMemory[this.chosenIndex].title = 'new stuff from form' (this.userDetails.value.title)
         //this.storage.set('Memory',tempMemory)
         var newSingleMemory : Memory =  new Memory(this.userDetails.value.scrapbookTitle, 
           this.userDetails.value.dateAdded,
           this.userDetails.value.memoryInfo,
           this.userDetails.value.gallery,
           this.userDetails.value.youtubeLink);

           
   
         tempMemory.push(newSingleMemory);
   
         this.storage.set('Memory', tempMemory);
   
       }
   
       console.log('locally stored!');
       this.navCtrl.push('ScrapbookPage');
       
     });
   }


   saveMem(message){
    if(message == 'success'){
      this.successToast();
    }else{
      this.errorToast();
    }
  }



  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'New Distraction created Successfully!',
      duration: 3000,
      position: 'top',
      cssClass: "toast-success",
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }  

  successToast() {
    let toast = this.toastCtrl.create({
      message: 'New Distraction saved successfully',
      duration: 3000,
      position: 'top',
      cssClass: "toast-success",
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  } 
  
  errorToast() {
    let toast = this.toastCtrl.create({
      message: 'New Distraction - failed.',
      duration: 20000,
      position: 'top',
      cssClass: 'toast-error',
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  } 

 gotoHelpNow(){
   this.navCtrl.push('HelpNowPage');

 }

}






 // saveScrapbookMemory(){
  //   this.storage.set('scrapbookTitle', this.userDetails.value.scrapbookTitle);
  //   console.log('This is the memory title ->', this.userDetails.value.scrapbookTitle);

  //   this.storage.set('dateAdded', this.userDetails.value.dateAdded);
  //   console.log('This is the Date of post ->', this.userDetails.value.dateAdded);

  //   this.storage.set('memoryInfo', this.userDetails.value.memoryInfo);
  //   console.log('This is the memory info ->', this.userDetails.value.memoryInfo);
    
  //   this.storage.set('galleryImg', this.userDetails.value.galleryImg);
  //   console.log('This is the galley image ->', this.userDetails.value.galleryImg);

  //   this.storage.set('youtubeLink', this.userDetails.value.youtubeLink);
  //   console.log('This is the youtube link ->', this.userDetails.value.youtubeLink);

  //   this.presentToast();
  //   console.log('locally stored!');
  //   this.navCtrl.push('ScrapbookPage');

  // }
