import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
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

    // checkLogin() {

    //   this.Storage.get('user_pin').then((value) => {
        
    //           console.log('User pin is recognised', value);
        
    //           if(value != "" || value != null){
        
    //           } else{
             
    //           }
    //         }).catch((e) => {
    //           console.log(e);
    //         });
    // }
    

  

  }
}
