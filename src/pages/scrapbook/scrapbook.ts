import { ScrapbookMemoryPage } from './../scrapbook-memory/scrapbook-memory';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Distraction } from './../../app/models/distraction';
import { FormBuilder, Validators } from '@angular/forms';
import { Memory } from './../../app/models/Memory';




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

  private items;

  private scrapbookTitle;
  private dateAdded;
  private memoryInfo;
  private galleryImg;
  private youtubeLink;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage ) {

    storage.get('scrapbookTitle').then((val) =>{
    console.log('What is the scrapbook title:', val);
    this.items = val;
    });

    storage.get('dateAdded').then((val) => {
    console.log('What is the Date added:', val);
    this.items = val;
    });

    storage.get('memoryInfo').then((val)=>{
    console.log('What is the Memory Info:', val);
    this.items = val;
    });

    storage.get('galleryImg').then((val)=> {
    console.log('What is the Image:', val);
    this.items = val;
    });

    storage.get('youtubeLink').then((val)=> {
    console.log('What is the youtube link:', val);
    this.items = val;
    });

  }
   


  ionViewDidLoad() {
    console.log('ionViewDidLoad ScrapbookPage');

  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter ScrapbookPage');

  }

  gotoAddMemory() {
    this.navCtrl.push('ScrapbookMemoryPage');
  } 

  gotoHelpNowPage(){
    this.navCtrl.push('HelpNowPage');
  }
   
  // getScrapbookMemory(){
  //     this.storage.get('memorys').then((val)=>{
  //       console.log('this is the scrapbook memory >', val);
  //       this.items = val;
        
  //     })
  // }
  // }

}


