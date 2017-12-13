import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController,  ActionSheetController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';


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
  private imageSrc: string;
  chosenPicture: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController,  private formBuilder: FormBuilder, private storage: Storage, private camera: Camera,  public actionsheetCtrl: ActionSheetController, public platform: Platform, public loadingCtrl: LoadingController) {

    this.userDetails = this.formBuilder.group({
      
              distractionTitle: ['', Validators.required],
              distraction: ['', Validators.required],
              galleryPhoto: [''],
              websiteLink: [''],
              youtubeLink: ['']
        
            });

            const options: CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            }
         
  }

saveDistractions() {

  this.storage.set('distractionTitle', this.userDetails.value.distractionTitle);
  console.log('this is the distraction title ->', this.userDetails.value.distractionTitle);

  this.storage.set('distraction', this.userDetails.value.distraction);
  console.log('this is the distraction info ->', this.userDetails.value.distraction);

  // this.storage.set('galleryPhoto', this.userDetails.value.galleryPhoto);

  this.storage.set('websiteLink', this.userDetails.value.websiteLink);
  console.log('this is the Website Link ->', this.userDetails.value.websiteLink);

  this.storage.set('youtubeLink', this.userDetails.value.youtubeLink);
  console.log('this is the Youtube Link ->', this.userDetails.value.youtubeLink);

  this.presentToast();
  console.log('locally stored!');

}

// changePicture() {
  
//       const actionsheet = this.actionsheetCtrl.create({
//         title: 'upload picture',
//         buttons: [
//           {
//             text: !this.platform.is('ios') ? 'gallery' : 'camera roll',
//             icon: !this.platform.is('ios') ? 'image' : null,
//             handler: () => {
//               this.getPicture();
//             }
//           },
//           {
//             text: 'cancel',
//             icon: !this.platform.is('ios') ? 'close' : null,
//             role: 'destructive',
//             handler: () => {
//               console.log('the user has cancelled the interaction.');
//             }
//           }
//         ]
//       });
//       return actionsheet.present();
//     }
    
//     getPicture() {
//       const loading = this.loadingCtrl.create();
  
//       loading.present();
//       return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
//         if (picture) {
//           this.chosenPicture = picture;
//         }
//         loading.dismiss();
//       }, error => {
//         alert(error);
//       });
//     }





  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDistractionPage');
  }

  gotoPlan() {
    this.navCtrl.push('CreateBeesafePlanPage');
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

  saveDistraction(message){
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
