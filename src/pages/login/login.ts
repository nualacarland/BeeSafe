import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Keyboard, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { NativeTransitionOptions, NativePageTransitions } from '@ionic-native/native-page-transitions';
// import { PinDialog } from '@ionic-native/pin-dialog';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  tempPin: any;
  private userDetails : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private storage: Storage, 
              private formBuilder: FormBuilder, public menu: MenuController, public keyboard: Keyboard, private nativePageTransitions: NativePageTransitions,public platform: Platform) {

    this.userDetails = this.formBuilder.group({
      
              pin1: ['', Validators.required],
              pin2: ['', Validators.required],
              pin3: ['', Validators.required],
              pin4: ['', Validators.required],
             
            });
      

          }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');  
    // this.menu.enable(true);
    // this.navCtrl.setRoot('DashboardPage');
  }

  moveFocus(nextElement) {
    nextElement.setFocus();
  }


  slidePage() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
    this.nativePageTransitions.slide(options);
    this.navCtrl.setRoot('ForgotPage');
  }
 





  gotoRegisterPage() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
    this.nativePageTransitions.slide(options);
    this.navCtrl.setRoot('RegisterPage');
  }

  ionViewWillAppear(){

    console.log('ionViewWillAppear LoginPage');

  }

  checkPin() {
    var tempPin = this.userDetails.value.pin1 + this.userDetails.value.pin2 + this.userDetails.value.pin3 + this.userDetails.value.pin4
    // console.log(tempPin);
    // console.log(tempPin);
 

    // console.log('What is the temp pin '+ tempPin);
    this.storage.get('user_pin').then((value) => {
      // console.log('What is the stored pin ', value);
      
      //       console.log('this is the user_pin stored', value);
      
            if(tempPin == value){

              // this.storage.set('tourShown', false);

              // console.log('login butttpn clicked');
              this.storage.get('tourShown').then((result) => {
                // console.log('what is result', result);
                if(result){
                  this.navCtrl.setRoot('DashboardPage');
                } else {
                  this.storage.set('tourShown', true);
                  this.navCtrl.setRoot('TourPage');
                }
              });

            } 
            else
            {
              this.errorToast();
              this.tempPin.reload();
          
            }
          }).catch((e) => {
            console.log(e);
          });
  }

  

  errorToast() {
    let toast = this.toastCtrl.create({
      message: 'Account not Recognized!',
      duration: 3000,
      position: 'top',
      cssClass: "toast-error beesafe-toast",
    });
    // location.reload();
    toast.onDidDismiss(() => {
      location.reload();
      console.log('Dismissed toast');
     
    });
    toast.present();
  
  

  } 

}
 