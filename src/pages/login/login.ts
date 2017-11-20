import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

    //localStorage to see if someone has already logged in

  }
}
