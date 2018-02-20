import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { getLocaleDayNames } from '@angular/common/src/i18n/locale_data_api';
import { ModalController } from 'ionic-angular';
import { AffirmationModalPage } from '../affirmation-modal/affirmation-modal';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-profile',

  templateUrl: 'profile.html',
})
export class ProfilePage {

  private userDetails : FormGroup;
  private _oldContact1 : {
    telephone:'',
    contact_name: ''

  }
  private _oldContact2 : {
    telephone:'',
    contact_name: ''
  }
  private _oldContact3 : {
    telephone:'',
    contact_name: ''
  }

  private _oldPin;

  private _oldEmailAddress;

  private _oldSelectedAvatar;

  private avatarsArray: any;
  private itemList;


  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, 
    private storage: Storage, private toastCtrl: ToastController, public modalCtrl: ModalController) {

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
      
              emailAddress: [''],
              pin1: ['', Validators.required],
              pin2: ['', Validators.required],
              pin3: ['', Validators.required],
              pin4: ['', Validators.required],
              avatars: ['', Validators.required],
              contact1Tel: [''],
              contact1Name: [''],
              contact2Tel: [''],
              contact2Name: [''],
              contact3Tel: [''],
              contact3Name: ['']
            });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    console.log('what is the old avatar', this._oldSelectedAvatar);
    // this.tempSetup();
    this.getOldStorage();
  }

  openAffirModal(){
    let Modal = this.modalCtrl.create(AffirmationModalPage);
     Modal.present();
  }

  showConfirmAlert(selectedRadio: any){
    console.log('what is in the form avatar value', this.userDetails.value.avatars);

  }


  getOldStorage(){
    // TODO: Get the current values from the local storage and assign these to some variables

    //Then in the editLocalShit() check if it is equal to the old shit
    //either you can update it to its old values or not update.


    this.storage.get('emergency1').then((value) => {
      this._oldContact1 = value;
        console.log('What is the value', value);
        console.log('what is the old contact1', this._oldContact1);
        this.userDetails.get('contact1Name').setValue(this._oldContact1.contact_name);
        this.userDetails.get('contact1Tel').setValue(this._oldContact1.telephone);
        
          }).catch((e) => {
            console.log(e);
          });


    this.storage.get('emergency2').then((value) => {
      this._oldContact2 = value;
        console.log('What is the value', value);
        console.log('what is the old contact2', this._oldContact2);
        this.userDetails.get('contact2Name').setValue(this._oldContact2.contact_name);
        this.userDetails.get('contact2Tel').setValue(this._oldContact2.telephone);

          }).catch((e) => {
            console.log(e);
          });

         
    this.storage.get('emergency3').then((value) => {
      this._oldContact3 = value;
        console.log('What is the value', value);
        console.log('what is the old contact3', this._oldContact3);
        this.userDetails.get('contact3Name').setValue(this._oldContact3.contact_name);
        this.userDetails.get('contact3Tel').setValue(this._oldContact3.telephone);
          }).catch((e) => {
            console.log(e);
          });

                
    this.storage.get('emailAddress').then((value) => {
      this._oldEmailAddress = value;
        console.log('What is the value', value);
        console.log('what is the old email', this._oldEmailAddress);
        this.userDetails.get('emailAddress').setValue(this._oldEmailAddress);
        
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

                      
      this.storage.get('user_pin').then((value) => {
        this._oldPin = value;
          console.log('What is the value', value);
          console.log('what is the old pin', this._oldPin);
            }).catch((e) => {
              console.log(e);
            });
    
  }


  editLocalShit() { 

    if(this.userDetails.value.pin1 == '' && this.userDetails.value.pin2 == '' && this.userDetails.value.pin3 == '' && this.userDetails.value.pin4 == ''){
  
      this.errorToast();
    //   this.storage.set('user_pin', this.userDetails.value.pin1 + this.userDetails.value.pin2 +this.userDetails.value.pin3 +this.userDetails.value.pin4); 

    } else {
      this.presentToast();
      console.log('local storage changed!');
      console.log('new avatar', this.userDetails.value.avatars);
    }

    this.storage.set('emailAddress', this.userDetails.value.emailAddress);


    this.storage.set('emergency1', {
      telephone: this.userDetails.value.contact1Tel,
      contact_name: this.userDetails.value.contact1Name
    });
    this.storage.set('emergency2', {
      telephone: this.userDetails.value.contact2Tel,
      contact_name: this.userDetails.value.contact2Name
    }) ;      
    
    this.storage.set('emergency3', {
      telephone: this.userDetails.value.contact3Tel,
      contact_name: this.userDetails.value.contact3Name
    });

    
    // //no changes in 
    // if(this.userDetails.value.contact1Tel == this._oldContact1.telephone && this.userDetails.value.contact1Name == this._oldContact1.contact_name){
    //   this.storage.set('emergency1', {
    //     telephone: this._oldContact1.telephone,
    //     contact_name: this._oldContact1.contact_name
    //   });

    // }
    // //Contact1 name changed only
    // if(this.userDetails.value.contact1Tel != this._oldContact1.telephone && this.userDetails.value.contact1Name == this._oldContact1.contact_name){
    //   this.storage.set('emergency1', {
    //     telephone: this._oldContact1.telephone,
    //     contact_name: this._oldContact1.contact_name
    //   });

    // }code 

//  if(this.userDetails.value.pin1 != this._oldPin.user_pin){

//  this.storage.set('user_pin', this.userDetails.value.pin1 + this.userDetails.value.pin2 +this.userDetails.value.pin3 +this.userDetails.value.pin4); 
//  } 

 

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


  gotoHelpNowPage(){
    this.navCtrl.push('HelpNowPage');
  }

}
