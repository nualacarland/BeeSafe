import { FormBuilder } from '@angular/forms';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Distraction } from './../../app/models/distraction';
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

  private items;
  private userDetails;
  trustedVideoUrl: SafeResourceUrl;
  private distraction;
  

  constructor(public navCtrl: NavController, public navParams: NavParams ,private storage: Storage,
     private formBuilder: FormBuilder, private youtube: YoutubeVideoPlayer, private domSanitizer: DomSanitizer ) {
    this.userDetails = this.formBuilder.group({
      
      distractionTitle: [''],
      distraction: [''],
      galleryPhoto: [''],
      websiteLink: [''],
      youtubeLink: ['']

    });

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DistractionsPage');
    this.storage.get('distractions').then((val)=>{
      console.log('What is the value of the distractions array',val);
      this.items = val;

      this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.userDetails.youtubeLink);
    })

  }


  ionViewDidEnter(){
    console.log('ionViewDidEnter DistractionsPage');
    this.storage.get('distractions').then((val)=>{
      console.log('What is the value of the distractions array',val);
      this.items = val;
    })
  }

  gotoHelpNow(){
    this.navCtrl.push('HelpNowPage');
  }

}
