import { DashboardPage } from './../dashboard/dashboard';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { LoginPage } from '../login/login';



/**
 * Generated class for the TourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tour',
  templateUrl: 'tour.html',
})
export class TourPage {


  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public platform: Platform, public navParams: NavParams, private storage: Storage) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourPage');
    
  }

  gotoDashboard(){
    this.navCtrl.setRoot('LoginPage');
  }



}



