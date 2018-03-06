import { Memory } from './../../app/models/Memory';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { reorderArray } from 'ionic-angular/util/util';
import { ToastController } from 'ionic-angular';



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
  private items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private FormBuilder: FormBuilder,
             private youtube: YoutubeVideoPlayer, private domSanitizer: DomSanitizer, private toastCtrl: ToastController) {
   
  }
  
  ionViewDidLoad() {
    this.chosenMemory = this.navParams.get('chosenMemory');
    this.chosenIndex = this.navParams.get('chosenIndex');
    console.log('What is the memory',this.chosenMemory);
    console.log('What is the index',this.chosenIndex);
    console.log('ionViewDidLoad ScrapbookMemoryPage');
    // this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.chosenMemory.youtubeLink);
    // console.log('WHAT IS THE TRUSTED ONE HERE', this.trustedVideoUrl);

    if(this.chosenMemory.youtubeLink != ''){
     this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.chosenMemory.youtubeLink);
     console.log('WHAT IS THE TRUSTED ONE HERE', this.trustedVideoUrl);
    }

  }


  ionViewWillEnter(){
   
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

    });
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


  delete(){
    this.items.splice(this.chosenIndex, 1);
    this.storage.set('Memory',  this.items).then((result => {
      console.log('Finished setting the memory', result);
      console.log('Delete successful?');
      console.log('what is items', this.items);
      this.deleteToast();
      this.navCtrl.pop();
    }));

  }

  deleteToast() {
    let toast = this.toastCtrl.create({
      message: 'Memory Deleted Successfully!',
      duration: 2000,
      position: 'top',
      cssClass: "toast-success",
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }  





}
