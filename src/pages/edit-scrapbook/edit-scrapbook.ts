import { Memory } from './../../app/models/Memory';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular/platform/platform';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController, LoadingController } from 'ionic-angular';





 /* Generated class for the EditScrapbookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-scrapbook',
  templateUrl: 'edit-scrapbook.html',
})
export class EditScrapbookPage {

  private userDetails: FormGroup;
  base64Image: any;
  private chosenIndex;
  private chosenMemory;


  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private formBuilder: FormBuilder, private storage: Storage,
              private camera: Camera, public actionsheetCtrl: ActionSheetController, public platform: Platform, public loadingCtrl: LoadingController) {


                // if(this.navParams.get('chosenIndex')){

                // }
                // if(this.navParams.get('chosenMemory')){

                // }

     this.userDetails = this.formBuilder.group({

      scrapbookTitle: ['', Validators.required],
      dateAdded: [''],
      memoryInfo: [''],
      galleryImg: [''],
      youtubeLink: ['']
                         
     });

  }

      
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditScrapbookPage');
    

  }

  EditMemory() {
        this.storage.get('Memory').then((val) => {
        console.log('Memory ',val);
    
        if(val == null){
    
          var newMemory =  [new Memory(this.userDetails.value.scrapbookTitle, 
            this.userDetails.value.dateAdded,
            this.userDetails.value.memoryInfo,
            this.userDetails.value.galleryImg,
            this.userDetails.value.youtubeLink)];
    
            this.storage.set('Memory', newMemory);
          
            }else {
            
            var tempMemory: [Memory] = val;
            tempMemory[this.chosenIndex].scrapbookTitle = (this.userDetails.value.scrapbookTitle)
            this.storage.set('Memory', tempMemory);

            }

       console.log('Locally Updated!');
       this.navCtrl.push('ScrapbookPage');
       
     });
   }

        
    
      
          // var tempMemory: [Memory] = val;
          // //So make an array of memories equal to what is in the local storage
          // //Then select the one you want by the chosenIndex that you pass in 
          // //so something like tempMemory[this.chosenIndex].title = 'new stuff from form' (this.userDetails.value.title)
          // //this.storage.set('Memory',tempMemory)

          // var newSingleMemory : Memory =  new Memory(this.userDetails.value.scrapbookTitle, 
          //   this.userDetails.value.dateAdded,
          //   this.userDetails.value.memoryInfo,
          //   this.userDetails.value.gallery,
          //   this.userDetails.value.youtubeLink);
    
          // tempMemory.push(newSingleMemory);
    
          // this.storage.set('Memory', tempMemory);

       



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


  
    

}
