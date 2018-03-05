import { YoutubePipe } from './../../pipes/youtube/youtube';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { ScrapbookMemoryPage } from './../scrapbook-memory/scrapbook-memory';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Item } from 'ionic-angular';
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

  private userDetails;
  base64Image: any;
  private items = [];
  trustedVideoUrl: SafeResourceUrl;

 
  posts =[];
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

   
  ionViewWillLoad(){

    var key = "Memory";
    console.log('ionViewDidLoad ScrapbookPage');
    console.log(this.items);

    this.storage.get('Memory').then((val)=>{
      console.log('What is the value of the Memory array',val);

        console.log();
        for (var _i = 0; _i < val.length; _i++) {
          var num = val[_i];
          if(val[_i].youtubeLink != ''){
            val[_i].trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(val[_i].youtubeLink);
          }
          this.items.push(val[_i])
      }

      console.log('WHAT IS THE NEW ITEMS', this.items);
      // this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.userDetails.value.youtubeLink);
      // console.log('what is the youtube link', this.userDetails.value.youtubeLink);
      // console.log('what is the trusted link', this.trustedVideoUrl);
  })
  }
  

  openVideo(){
    this.youtube.openVideo('youtubeLink');
  }

  gotoEditPage(item: any, index: Number){

    this.navCtrl.push('ScrapbookMemoryPage', { 'chosenMemory': item, 'chosenIndex' : index });
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


