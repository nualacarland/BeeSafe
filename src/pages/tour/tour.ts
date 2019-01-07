import { DashboardPage } from './../dashboard/dashboard';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';



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

  // rootPage: any = 'LoginPage';
  @ViewChild(Slides) slides: Slides;
  private showContinue = false;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public platform: Platform, public navParams: NavParams, private storage: Storage) {

  
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TourPage');
   
    
  }

  goDashboard(){
    this.navCtrl.setRoot('DashboardPage');
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    if(currentIndex >= 2){
      this.showContinue = true;

    }else{
      this.showContinue = false;
    }
  }

}



