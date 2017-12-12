import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
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

  private userDetails : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private storage: Storage, private formBuilder: FormBuilder, public menu: MenuController) {

    this.userDetails = this.formBuilder.group({
      
              pin1: ['', Validators.required],
              pin2: ['', Validators.required],
              pin3: ['', Validators.required],
              pin4: ['', Validators.required],
             
            });
      
        }


        
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');  
    this.menu.enable(false);
  }


  gotoLazyPage(){
    this.navCtrl.push('DashboardPage');
  }

  gotoForgotPage(){
    this.navCtrl.push('ForgotPage');
  }

  gotoRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }

  ionViewWillAppear(){

    console.log('ionViewWillAppear LoginPage');

  }

  checkPin() {
    var tempPin = this.userDetails.value.pin1 + this.userDetails.value.pin2 + this.userDetails.value.pin3 + this.userDetails.value.pin4
    console.log(tempPin);
    console.log(tempPin);
 

    console.log('What is the temp pin '+ tempPin);
    this.storage.get('user_pin').then((value) => {
      console.log('What is the stored pin ', value);
      
            console.log('this is the user_pin stored', value);
      
            if(tempPin == value){
              this.navCtrl.push('DashboardPage');
            } 
            else
            {
              this.errorToast();
        
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
      cssClass: "toast-error",
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();

  } 

//   pinKeyboard() {
//   this.pinDialog.prompt('Enter your PIN', 'Verify PIN', ['OK', 'Cancel'])
//   .then(
//     (result: any) => {
//       if (result.buttonIndex == 1) console.log('User clicked OK, value is: ', result.input1);
//       else if(result.buttonIndex == 2) console.log('User cancelled');
    
//     }
//   );
// }




}
 