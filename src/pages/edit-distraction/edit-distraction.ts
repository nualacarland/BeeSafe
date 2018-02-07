import { FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Distraction } from './../../app/models/distraction';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the EditDistractionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-distraction',
  templateUrl: 'edit-distraction.html',
})
export class EditDistractionPage {

  // private passedDistractionIndex: any;
  // private distraction : Distraction;

  private userDetails: FormGroup;
  private _oldDistractionTitle;
  private _oldDistraction;
  private _oldgalleryPhoto;
  private _oldwebsiteLink;
  private _oldyoutubeLink;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public formBuilder: FormBuilder) {
    this.userDetails = this.formBuilder.group({
      
      distractionTitle: [''],
      distraction: [''],
      galleryPhoto: [''],
      websiteLink: [''],
      youtubeLink: ['']

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditDistractionPage');
    this.getOldStorage();
    
  }


  getOldStorage(){
    this.storage.get('distractionTitle').then((value) =>{
      this._oldDistractionTitle = value;
      console.log('What is the value', value);
      console.log('what is the old distraction title', this._oldDistractionTitle);
      this.userDetails.get('distractionTitle').setValue(this._oldDistractionTitle);
      
      }).catch((e) =>{
            console.log(e);
          });

     this.storage.get('distraction').then((value) =>{
       this._oldDistraction = value;
       console.log('what is the value', value);
       console.log('what is the old distraction', this._oldDistraction);
       this.userDetails.get('distraction').setValue(this._oldDistraction);
     
      }).catch((e) =>{
       console.log(e);
     });

     this.storage.get('oldgalleryPhoto').then((value) =>{
       this._oldgalleryPhoto = value;
       console.log('what is the value', value);
       console.log('what is the old photo', this._oldgalleryPhoto);
       this.userDetails.get('oldgalleryPhoto').setValue(this._oldgalleryPhoto);

     }).catch((e) =>{
       console.log(e);
     });

     this.storage.get('oldwebsiteLink').then((value) =>{
      this._oldwebsiteLink = value;
      console.log('what is the value', value);
      console.log('what is the old web link', this._oldwebsiteLink);
      this.userDetails.get('oldwebsiteLink').setValue(this._oldwebsiteLink);

    }).catch((e) =>{
      console.log(e);
    });

    this.storage.get('oldyoutubeLink').then((value) =>{
      this._oldyoutubeLink= value;
      console.log('what is the value', value);
      console.log('what is the old youtube link', this._oldyoutubeLink);
      this.userDetails.get('oldyoutubeLink').setValue(this._oldyoutubeLink);

    }).catch((e) =>{
      console.log(e);
    });

    
  }

}






   // this.passedDistractionIndex = this.navParams.get('distractionIndex');

    // this.storage.get('distractions').then((val)=>{

      // this.distraction = val[this.passedDistractionIndex];
      //TODO: Get the distractions array from storage
      //use the passed in array index to find which one we need
    //   //distractionsArray[this.passedDistractionIndex]

    //   console.log(this.distraction);

    // });

    // console.log(this.navParams.get('distractionIndex'));

  






  // editDistraction(){
  //   this.storage.get('distractions').then((val)=>{

  //     this.distraction.distractionInfo = this.userDetails.distractionTitle;
  //     this.distraction.distractionInfo = this.userDetails.distraction;
  //     this.distraction.distractionInfo = this.userDetails.galleryPhoto;
  //     this.distraction.distractionInfo = this.userDetails.websiteLink;
  //     this.distraction.distractionInfo = this.userDetails.youtubeLink;
  //     // this.distraction.distractionInfo = "newshit";
 
  //     var tempArray = val;

  //     tempArray[this.passedDistractionIndex] = this.distraction;

  //     this.storage.set('distractions', tempArray);
  //     console.log(this.distraction);

  //   });



  // }


