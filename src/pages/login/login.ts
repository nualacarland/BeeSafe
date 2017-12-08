import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

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

  private db: SQLiteObject;
  private userDetails : FormGroup;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private formBuilder: FormBuilder ) {


        this.userDetails = this.formBuilder.group({
  
          pin1: ['', Validators.required],
          pin2: ['', Validators.required],
          pin3: ['', Validators.required],
          pin4: ['', Validators.required]
  
        });

}
  //localStorage to see if someone has already logged in








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

  

    
  




  }
}
