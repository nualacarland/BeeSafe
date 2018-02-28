import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {


  private forgotPassword : FormGroup;
  private didGetEmailRight : Boolean = false;
  private resetPin : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, 
    private formBuilder: FormBuilder, private storage: Storage, public menu: MenuController) {

            this.forgotPassword = this.formBuilder.group({
      
                emailAddress: ['', Validators.required]
            
            });


            this.resetPin = this.formBuilder.group({
      
              pin1: ['', Validators.compose([Validators.maxLength(1), Validators.required])],
              pin2: ['', Validators.compose([Validators.maxLength(1), Validators.required])],
              pin3: ['', Validators.compose([Validators.maxLength(1), Validators.required])],
              pin4: ['', Validators.compose([Validators.maxLength(1), Validators.required])],          
          });

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
    this.menu.enable(false);
  }

  moveFocus(nextElement) {
    nextElement.setFocus();
  }

 gotoLoginPage() {
   this.navCtrl.push('LoginPage');

 }

 resetPinFunc(){
  console.log('They have reset their pin lets see what it is');

  console.log(this.resetPin.value);
  this.successToast();
  this.navCtrl.push('LoginPage');
  
 }

 submitEmail(){

  this.storage.get('emailAddress').then((value) => {
      
    console.log('this is the user email that is stored', value);
    console.log('this is what they typed in ',this.forgotPassword.value.emailAddress);
    if(value == this.forgotPassword.value.emailAddress){
      console.log('YAY THE EMAIL MATCHES');
      this.didGetEmailRight = true;
      //We will then show the next screen.
    }else{
      this.errorToast();
    }

  }).catch((e) => {
    console.log(e);
  });


 }

 presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Email has been sent successfully!',
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
    message: 'Pin has been Reset!',
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
    message: 'Email not recognised!',
    duration: 3000,
    position: 'top',
    cssClass: "toast-error",
  });
  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });
  toast.present();

} 



  

  
}
