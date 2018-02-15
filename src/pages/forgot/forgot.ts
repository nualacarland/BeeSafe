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

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private formBuilder: FormBuilder, private storage: Storage, public menu: MenuController) {

    this.forgotPassword = this.formBuilder.group({
      
      emailAddress: ['', Validators.required]
            
            })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
    this.menu.enable(false);

  }


 gotoLoginPage() {
   this.navCtrl.push('LoginPage');

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
