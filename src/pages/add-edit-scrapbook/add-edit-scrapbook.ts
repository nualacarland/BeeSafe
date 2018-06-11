import { DomSanitizer } from '@angular/platform-browser';
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
  myDate: String = new Date().toISOString();

 

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private formBuilder: FormBuilder, private storage: Storage,
              private camera: Camera, public actionsheetCtrl: ActionSheetController, public platform: Platform, public loadingCtrl: LoadingController,
              private DomSanitizer: DomSanitizer) {


                if(this.navParams.get('chosenIndex')){

                }

                if(this.navParams.get('chosenMemory')){

                }

    this.userDetails = this.formBuilder.group({
      
              scrapbookTitle: ['', Validators.required],
              dateAdded: [''],
              memoryInfo: [''],
              base64Image: [''],
              youtubeLink: ['']
              
            });

  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEditScrapbookPage');
  }

  accessGallery(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE
    

      
     }).then((sourcePath) => {
       this.base64Image = 'data:image/jpeg;base64,' +sourcePath;
      //  console.log('Image has been selected', this.camera.DestinationType.FILE_URI );
        console.log('what is the source path', sourcePath);

      }, (err) => {
       console.log(err);
       console.log('error');
     }); 
   }
   


  saveMemory() {
    var hasErrored = false;
    this.storage.get('Memory').then((val) => {
       console.log('Memory ',val);

       if(val == null){
   
        console.log('Memories are empty');
         var newMemory =  [new Memory(this.userDetails.value.scrapbookTitle, 
           this.userDetails.value.dateAdded,
           this.userDetails.value.memoryInfo,
           this.base64Image,
           this.userDetails.value.youtubeLink)];
   
           this.storage.set('Memory', newMemory);
       } else{
         var tempMemory: [Memory] = val;
         //So make an array of memories equal to what is in the local storage
         //Then select the one you want by the chosenIndex that you pass in 
         //so something like tempMemory[this.chosenIndex].title = 'new stuff from form' (this.userDetails.value.title)
         //this.storage.set('Memory',tempMemory)
        var tempYoutubeEmbed;
         if(this.userDetails.value.youtubeLink.includes('watch?')){
           console.log('STRING CONTAINS WATCH?');
             tempYoutubeEmbed = this.userDetails.value.youtubeLink.toString().replace("watch?v=", "embed/");
            
             hasErrored = false;
        }else if(this.userDetails.value.youtubeLink.includes('youtu.be')){
            console.log('its a mobile link');
            var parts = this.userDetails.value.youtubeLink.split("/");
            var result = parts[parts.length - 1];
            tempYoutubeEmbed = "https://www.youtube.com/embed/"+result;
            hasErrored = false;
        }
        
        if(!hasErrored){

          console.log('what the fuck is the base64 ', this.base64Image);
          var newSingleMemory : Memory =  new Memory(this.userDetails.value.scrapbookTitle, 
            this.userDetails.value.dateAdded,
            this.userDetails.value.memoryInfo,
            this.base64Image,
           tempYoutubeEmbed);
 
 
           
          tempMemory.push(newSingleMemory);
       
    
          this.storage.set('Memory', tempMemory);
        }else{
            //to your toast here or something
            // this.errorToast();
        }

   
       }
   
       console.log('locally stored!');
      //  this.navCtrl.push('ScrapbookPage');
      this.navCtrl.pop();
       
       
     });
   }


   saveMem(message){
    if(message == 'success'){
      this.successToast();
      this.navCtrl.pop();
    }else{
      this.errorToast();
    }
  }

  goBack(){
    this.navCtrl.push('ScrapbookPage');
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'New Distraction created Successfully!',
      duration: 2000,
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
      duration: 2000,
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
      message: 'Failed.',
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


