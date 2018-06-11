import { FormBuilder } from '@angular/forms';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Distraction } from './../../app/models/distraction';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';




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

  InAppBrowser: any;
  private items = [];
  private userDetails;
  private distraction;
  trustedVideoUrl: SafeResourceUrl;
  base64Image: any;

  
  constructor(public navCtrl: NavController, public navParams: NavParams ,private storage: Storage,
     private formBuilder: FormBuilder, private youtube: YoutubeVideoPlayer, private domSanitizer: DomSanitizer,
    private inAppBrowser: InAppBrowser ) {
    this.userDetails = this.formBuilder.group({
      
      distractionTitle: [''],
      distraction: [''],
      base64Image: [''],
      websiteLink: [''],
      youtubeLink: ['']

    });

  }


  ionViewDidEnter(){
    this.items = [];
    var key = "distractions";
    console.log('ionViewDidEnter DistractionsPage');
    console.log(this.items);

    this.storage.get('distractions').then((val)=>{
      console.log('What is the value of the Distractions array',val);

        console.log();
        for (var _i = 0; _i < val.length; _i++) {
          var num = val[_i];
          if(val[_i].youtubeLink != ''){
            val[_i].trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(val[_i].youtubeLink);
          }
          this.items.push(val[_i])
      }

      console.log('WHAT IS THE NEW ITEMS', this.items);
  });
  }

  doYoutubeLink(distraction: any){
    console.log('What is the clicked item', distraction);
    // this.cordova.InAppBrowser.open(item.youtubeLink, "_system", "location=true");
    const browser = this.inAppBrowser.create(distraction.youtubeLink, '_self');
    // onclick="window.open('https://www.youtube.com/watch?v=Nn5RQpZBDsg', '_system', 'location=yes');"

  }

  doLink(distraction: any){
    console.log('What is the clicked item', distraction);
    // const browser = this.InAppBrowser.open(distraction.websiteLink, "_system", "location=true");
    const browser = this.inAppBrowser.create(distraction.websiteLink, '_self');

  } 

  // openUrl(distraction: any) {
  //   const browser = this.InAppBrowser.create(distraction.websiteLink);
  // }




  gotoHelpNow(){
    this.navCtrl.push('HelpNowPage');
  }

}
