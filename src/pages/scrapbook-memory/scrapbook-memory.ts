import { Memory } from './../../app/models/Memory';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



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

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private FormBuilder: FormBuilder) {
   

    this.chosenMemory = this.navParams.get('chosenMemory');
    this.chosenIndex = this.navParams.get('chosenIndex');

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ScrapbookMemoryPage');
    // this.storage.get('Memory').then((val) => {
    // console.log('what is the value of the memory array', val);
    // this.items = val;
    
    // })
  }

  
  gotoHelpNow() {
    this.navCtrl.push('HelpNowPage');
  }

  gotoEdit() {
    this.navCtrl.push('AddEditScrapbookPage',{ 'chosenMemory': this.chosenMemory , 'chosenIndex' : this.chosenIndex});
  }


  


    


}
