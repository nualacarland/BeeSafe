import { Distraction } from './../../app/models/distraction';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController,  ActionSheetController, Item, ItemSliding } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Camera, DestinationType } from '@ionic-native/camera';
import { Cordova } from '@ionic-native/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';




/**
 * Generated class for the AddDistractionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-distraction',
  templateUrl: 'add-distraction.html',
})
export class AddDistractionPage {

  private userDetails : FormGroup;
  base64Image: any;
  activeItemSliding: ItemSliding = null;
  private emojiArray: any;
  private itemList;
  
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, 
   private formBuilder: FormBuilder, private storage: Storage, private camera: Camera,  public actionsheetCtrl: ActionSheetController, 
   public platform: Platform, public loadingCtrl: LoadingController ) {

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

    this.userDetails = this.formBuilder.group({
      
              distractionTitle: ['', Validators.required],
              distraction: ['', Validators.required],
              emojis: [''],
              galleryPhoto: [''],
              websiteLink: [''],
              youtubeLink: ['']
        
            });
   
  }


ionViewDidLoad() {
  console.log('ionViewDidLoad AddDistractionPage');
  console.log(this.emojiArray);
 
}

doCancel(){
  this.navCtrl.push('DistractionsPage');
}

showConfirmAlert(selectedRadio: any){
  console.log('what is the saved emojis', this.userDetails.value.emojis);

}

saveDistractions() {

  var hasErrored = false;
  this.storage.get('distractions').then((val) => {
    console.log('distractions ',val);
    var tempYoutubeEmbed;

    if(this.userDetails.value.youtubeLink.includes('watch?')){
      console.log('STRING CONTAINS WATCH?');
        tempYoutubeEmbed = this.userDetails.value.youtubeLink.toString().replace("watch?v=", "embed/");
        hasErrored = false;
   }else if(this.userDetails.value.youtubeLink.includes('youtu.be')){
       console.log('its a mobile link');
       var parts = this.userDetails.value.youtubeLink.split("/");
       var result = parts[parts.length - 1]; // Or parts.pop();
       tempYoutubeEmbed = "https://www.youtube.com/embed/"+result;
       hasErrored = false;
   }



    if(val == null){


      var newDistraction =  [new Distraction(this.userDetails.value.distractionTitle, 
        this.userDetails.value.distraction,
        this.userDetails.value.emojis,
        this.camera.DestinationType.DATA_URL,
        this.userDetails.value.websiteLink,tempYoutubeEmbed)];

        this.storage.set('emojis', this.userDetails.value.emojis);

        console.log('emojis that are being saved', this.userDetails.value.emojis);
        this.storage.set('distractions', newDistraction);
        console.log('locally stored!');
        this.successToast();
        this.navCtrl.pop();
     
    } else{
      var tempDistractions: [Distraction] = val;




if(!hasErrored){
      var newSingleDistraction : Distraction =  new Distraction(this.userDetails.value.distractionTitle, 
        this.userDetails.value.distraction,
        this.userDetails.value.emojis,
        this.camera.DestinationType.DATA_URL,
        this.userDetails.value.websiteLink,
        tempYoutubeEmbed);

        this.storage.set('emojis', this.userDetails.value.emojis);

      console.log('emojis that are being saved', this.userDetails.value.emojis);
      tempDistractions.push(newSingleDistraction);

      this.storage.set('distractions', tempDistractions);
      
  }else{
  //this.errorToast();  
  }
      console.log('this is the saved emoji', this.userDetails.value.emojis);
      console.log('locally stored!');
      this.successToast();
      this.navCtrl.pop();
   
      }
  
  });

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
