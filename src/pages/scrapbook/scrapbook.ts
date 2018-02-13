import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { ScrapbookMemoryPage } from './../scrapbook-memory/scrapbook-memory';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Memory } from './../../app/models/Memory';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Storage } from '@ionic/storage';



/**
 * Generated class for the ScrapbookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scrapbook',
  templateUrl: 'scrapbook.html',
})

export class ScrapbookPage {

  private userDetails : FormGroup;
  base64Image: any;
  private items;
  trustedVideoUrl: SafeResourceUrl;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, 
             private FormBuilder: FormBuilder, private storage: Storage, private youtube: YoutubeVideoPlayer,
             private domSanitizer: DomSanitizer) {
    
          this.userDetails = this.FormBuilder.group({
              scrapbookTitle: [''],
              dateAdded: [''],
              memoryInfo: [''],
              galleryImg: [''],
              youtubeLink: ['']
              
           });

  }

    ionViewDidLoad() {
      console.log('ionViewDidLoad ScrapbookPage');
      this.storage.get('Memory').then((val)=>{
        console.log('What is the value of the Memory array',val);
        this.items = val;
        
    })
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter ScrapbookPage');
    this.storage.get('Memory').then((val)=>{
      console.log('What is the value of the Memory array',val);
      this.items = val;
      // this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.userDetails.value.youtubeLink);
    })
  }

  openVideo(){
    this.youtube.openVideo('youtubeLink');
  }

  viewMemory(){
    this.navCtrl.push('ScrapbookMemoryPage');
  }

  gotoAddMemory() {
    this.navCtrl.push('AddEditScrapbookPage');
  } 
  gotoHelpNowPage(){
    this.navCtrl.push('HelpNowPage');
  }



}


