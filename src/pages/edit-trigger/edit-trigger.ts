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

private userDetails : FormGroup;

private newTrigger;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private storage: Storage) {

        storage.get('newTrigger').then((val) => {
          console.log('Trigger saved in storage --> ', val);
          this.newTrigger = val.newTrigger;

        });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTriggerPage');
  }




  
  gotoViewDistractions(){
    this.navCtrl.push('View-DistractionsPage');
  }

}
