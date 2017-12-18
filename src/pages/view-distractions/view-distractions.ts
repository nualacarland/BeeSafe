import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the ViewDistractionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-distractions',
  templateUrl: 'view-distractions.html',
})
export class ViewDistractionsPage {

private distraction;
private websiteLink;
private youtubeLink;


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    storage.get('distraction').then((val) => {
      console.log('What is this value ',val);
      this.distraction = val;
    });

    storage.get('websiteLink').then((val) => {
      console.log('What is this value ',val);
      this.websiteLink = val;
    });

    storage.get('youtubeLink').then((val) => {
      console.log('What is this value ',val);
      this.youtubeLink = val;
    });

    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewDistractionsPage');
  }




}
