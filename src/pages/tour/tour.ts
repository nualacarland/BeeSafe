import { DashboardPage } from './../dashboard/dashboard';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';



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

  rootPage: any = 'LoginPage';
  loader: any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public platform: Platform, public navParams: NavParams, private storage: Storage) {
 
    this.platform.ready().then(() => {
 
      this.storage.get('tourShown').then((result) => {
 
        if(result){
          this.rootPage = 'LoginPage';
        } else {
          this.rootPage = 'TourPage';
          this.storage.set('tourShown', true);
        }
 
        this.loader.dismiss();
 
      });
 
    });
 
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad TourPage');
    
  }


  gotoDashboard(){
    this.navCtrl.setRoot('LoginPage');
  }

}



