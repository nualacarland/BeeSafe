import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the AddEditScrapbookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-edit-scrapbook',
  templateUrl: 'add-edit-scrapbook.html',
})
export class AddEditScrapbookPage {

  private userDetails : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private formBuilder: FormBuilder, private storage: Storage,private toastCtrl: ToastController) {

    this.userDetails = this.formBuilder.group({
      
              scrapbookTitle: ['', Validators.required],
              dateAdded: [''],
              memoryInfo: [''],
              galleryImg: [''],
              youtubeLink: ['']
              
            });

  }

  saveScrapbookMemory(){
    this.storage.set('scrapbookTitle', this.userDetails.value.scrapbookTitle);
    console.log('This is the memory title ->', this.userDetails.value.scrapbookTitle);

    this.storage.set('dateAdded', this.userDetails.value.dateAdded);
    console.log('This is the Date of post ->', this.userDetails.value.dateAdded);

    this.storage.set('memoryInfo', this.userDetails.value.memoryInfo);
    console.log('This is the memory info ->', this.userDetails.value.memoryInfo);
    
    this.storage.set('galleryImg', this.userDetails.value.galleryImg);
    console.log('This is the galley image ->', this.userDetails.value.galleryImg);

    this.storage.set('youtubeLink', this.userDetails.value.youtubeLink);
    console.log('This is the youtube link ->', this.userDetails.value.youtubeLink);

    this.presentToast();
    console.log('locally stored!');
    this.navCtrl.push('ScrapbookPage');

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEditScrapbookPage');
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'New Distraction created Successfully!',
      duration: 3000,
      position: 'top',
      cssClass: "toast-success",
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }  



}
