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
  private userDetails;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private formBuilder: FormBuilder, public validators: Validators) {
    this.userDetails = this.formBuilder.group({
      
        scrapbookTitle: ['', Validators.required],
        dateAdded: [''],
        memoryInfo: [''],
        galleryImg: [''],
        youtubeLink: ['']
  
      });
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScrapbookPage');
    this.storage.get('memorys').then((val) =>{
      console.log('What is the vlaue of the Memory array', val);
      this.items = val;
    })
 
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter ScrapbookPage');
    this.storage.get('memorys').then((val)=>{
      console.log('What is the value of the Scrapbook Memory array', val);
      this.items = val;
    })
  }

  gotoAddMemory() {
    this.navCtrl.push('ScrapbookMemoryPage');
  } 

  gotoHelpNowPage(){
    this.navCtrl.push('HelpNowPage');
  }
   

}


  // this.posts = [
    //   {
    //     description: 'Date Added',
    //     image:
        
    //   },
    //   {
    //     description: 'Date Added',
        
    //   },
    //   {
    //     description: 'Date Added',
      
    //   },
     
    //   {
    //     description: 'Date Added',
  
    //   },
     
    // ];