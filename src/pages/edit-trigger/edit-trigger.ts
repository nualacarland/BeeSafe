import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the EditTriggerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-edit-trigger',
  templateUrl: 'edit-trigger.html',
})
export class EditTriggerPage {

  private triggerTitle;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage ) {
    
    storage.get('triggerTitle').then((val) =>{
      console.log('what is the value',val);
      this.triggerTitle = val;
    });

  }

  getTriggerList(){
    this.storage.get('triggerTitle').then((val) =>{
      this.triggerTitle = val;
      this.triggerTitle.push()
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTriggerPage');
   
}


}


// storage.get('emergency1').then((val) => {
//   console.log('What is this value ',val);
//   this.emergency1.telephone = val.telephone;
//   this.emergency1.contact_name = val.contact_name;
// });