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
import { InAppBrowser } from '@ionic-native/in-app-browser';






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

  cordova: any;
  platform: any;
  private userDetails;
  base64Image: any;
  
  private items = [];

  youtubeLink: string;
  trustedVideoUrl: SafeResourceUrl;
  

 
  posts =[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, 
             private FormBuilder: FormBuilder, private storage: Storage, private youtube: YoutubeVideoPlayer,
             private DomSanitizer: DomSanitizer, private inAppBrowser: InAppBrowser) {
    
          // this.userDetails = this.FormBuilder.group({
          //     scrapbookTitle: [''],
          //     dateAdded: [''],
          //     memoryInfo: [''],
          //     base64Image: [''],
          //     youtubeLink: ['']
              
          //  });
  }

   

  ionViewDidEnter(){
    this.items = [];
    var key = "Memory";
    console.log('ionViewDidLoad ScrapbookPage');

    this.storage.get('Memory').then((val)=>{
      // console.log('What is the value of the Memory array',JSON.stringify(val));

        console.log();
        for (var _i = 0; _i < val.length; _i++) {
          var num = val[_i];
          if(val[_i].youtubeLink != ''){
            val[_i].trustedVideoUrl = this.DomSanitizer.bypassSecurityTrustResourceUrl(val[_i].youtubeLink);
          }

          this.items.push(val[_i])
      }

      console.log('WHAT IS THE NEW ITEMS', this.items);
  });
  }

  // launch(url) {
  //   this.platform.ready().then(() => {
  //       this.cordova.InAppBrowser.open(url, "_system", "location=true");
  //   });
  // }

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

  doYoutubeLink(item: any){
    console.log('What is the clicked item', item);
    // this.cordova.InAppBrowser.open(item.youtubeLink, "_system", "location=true");
    const browser = this.inAppBrowser.create(item.youtubeLink, '_self');
    // onclick="window.open('https://www.youtube.com/watch?v=Nn5RQpZBDsg', '_system', 'location=yes');"

  }

  

}


