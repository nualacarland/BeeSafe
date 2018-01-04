import { FormBuilder, Validators } from '@angular/forms';
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

  private passedDistractionIndex;
  private distraction : Distraction;
  private userDetails;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public formBuilder: FormBuilder, public validators: Validators) {
    this.userDetails = this.formBuilder.group({
      
      distractionTitle: ['', Validators.required],
      distraction: ['', Validators.required],
      galleryPhoto: [''],
      websiteLink: [''],
      youtubeLink: ['']

    });

    this.setupFields();


  }

  setupFields(){
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditDistractionPage');
    this.passedDistractionIndex = this.navParams.get('distractionIndex');

    this.storage.get('distractions').then((val)=>{

      this.distraction = val[this.passedDistractionIndex];
      //TODO: Get the distractions array from storage
      //use the passed in array index to find which one we need
      //distractionsArray[this.passedDistractionIndex]


      console.log(this.distraction);

    });

    console.log(this.navParams.get('distractionIndex'));
    console.log(this.navParams.get('distractionIndex'));
    console.log(this.navParams.get('distractionIndex'));
    console.log(this.navParams.get('distractionIndex'));
    console.log(this.navParams.get('distractionIndex'));
    console.log(this.navParams.get('distractionIndex'));
    console.log(this.navParams.get('distractionIndex'));




  }


  editDistraction(){
    this.storage.get('distractions').then((val)=>{

      this.distraction.distractionInfo = this.userDetails.distractionTitle;
      this.distraction.distractionInfo = "newshit";
      this.distraction.distractionInfo = "newshit";
      this.distraction.distractionInfo = "newshit";

      var tempArray = val;

      tempArray[this.passedDistractionIndex] = this.distraction;

      this.storage.set('distractions', tempArray);
      console.log(this.distraction);

    });



  }

}
