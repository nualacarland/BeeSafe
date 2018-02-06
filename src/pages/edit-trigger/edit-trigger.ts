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
private userDetails : FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private storage: Storage, ) {
    this.userDetails = this.formBuilder.group({

       triggerTitle: ['', Validators.required]
  
    });

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTriggerPage');
    this.storage.get('triggerTitle').then((val) =>{
      console.log('What is the value of the trigger', val);
      this.items = val;
  })
}

ionViewDidEnter(){

  console.log('ionViewDidEnter EditTriggerPage');
  this.storage.get('triggerTitle').then((val) => {
    console.log('What is the value of the trigger', val);
    this.items = val;

  })

}

getLocalStorage(){
  this.storage.get('emailAddress').then((value) => {

  });
}


  gotoViewDistractions(){
    this.navCtrl.push('View-DistractionsPage');
  }

}


// storage.get('emergency1').then((val) => {
//   console.log('What is this value ',val);
//   this.emergency1.telephone = val.telephone;
//   this.emergency1.contact_name = val.contact_name;
// });