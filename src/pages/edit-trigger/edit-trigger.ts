import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

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

 private items;
 private userDetails;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private formBuilder: FormBuilder ) {
    this.userDetails = this.formBuilder.group({

      triggerTitle: ['']

    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTriggerPage');
    this.storage.get('triggers').then((val) =>{
      console.log('what is the value of the trigger', val);
      this.items = val; 
    })
   
}


}
