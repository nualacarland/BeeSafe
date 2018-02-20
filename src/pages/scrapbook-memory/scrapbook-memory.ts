import { Memory } from './../../app/models/Memory';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';



/**
 * Generated class for the ScrapbookMemoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scrapbook-memory',
  templateUrl: 'scrapbook-memory.html',
})
export class ScrapbookMemoryPage {

  private chosenMemory;
  private userDetails : FormGroup;
  base64Image: any;
  private chosenIndex;
  trustedVideoUrl: SafeResourceUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private FormBuilder: FormBuilder,
             private youtube: YoutubeVideoPlayer, private domSanitizer: DomSanitizer) {
   


  }

  ionViewDidLoad() {
    this.chosenMemory = this.navParams.get('chosenMemory');
    this.chosenIndex = this.navParams.get('chosenIndex');
    console.log('What is the memory',this.chosenMemory);
    console.log('What is the index',this.chosenIndex);
    console.log('ionViewDidLoad ScrapbookMemoryPage');
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.chosenMemory.youtubeLink);
  }

  
  gotoHelpNow() {
    this.navCtrl.push('HelpNowPage');
  }

  gotoEdit(chosenMemory,i) {
    console.log('clicked goto edit scrapbook button');
    console.log(this.chosenMemory);
    console.log(this.chosenIndex);
    this.navCtrl.push('EditScrapbookPage',{ 'chosenMemory': this.chosenMemory , 'chosenIndex' : this.chosenIndex });
  }

  // deleteItem(items, index){
  //   this.items.splice(index, 1);
  //   this.storage.set('Memory',  this.items);
  // }




  


    


}
