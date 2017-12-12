import { LoginPage } from './../login/login';
import { DashboardPage } from './../dashboard/dashboard';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { EmergencyContactModalPage } from '../emergency-contact-modal/emergency-contact-modal';
import { ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})




/*
Right...
then on register take all their details and insert them into the storage, check to see if the storage is present if it is then someone has already registered and 
we shouldnt let them.

then on login check the pin against what is stored locally.

then goto home screen

the triggers are gonna be tricky to save in local storage but its gonna be more manageable than sqlite

distractions = [{

    distraction_title: 'test',
    distraction_text: 'test',
    distraction_url: 'www.',
    distraction_photo: '/assets/images/logo.png'

},{

    distraction_title: 'test',
    distraction_text: 'test',
    distraction_url: 'www.',
    distraction_photo: '/assets/images/logo.png'

}]


*/

export class RegisterPage {
  nav: any;
  value: any;
  
  private db: SQLiteObject;

  private userDetails : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public modalCtrl: ModalController, private toastCtrl: ToastController,
    private formBuilder: FormBuilder, private storage: Storage, public menu: MenuController){

      this.userDetails = this.formBuilder.group({

        emailAddress: ['', Validators.required],
        pin1: ['', Validators.required],
        pin2: ['', Validators.required],
        pin3: ['', Validators.required],
        pin4: ['', Validators.required],
        contact1Tel: ['', Validators.required],
        contact1Name: ['', Validators.required],
        contact2Tel: ['', Validators.required],
        contact2Name: ['', Validators.required],
        contact3Tel: ['', Validators.required],
        contact3Name: ['', Validators.required]
      });

  }

  createAccount(){
    console.log('What is in the form? ', this.userDetails.value);
    this.checkUser();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    // this.storage.clear();
    // console.log('storage wiped!');
    this.menu.enable(false);
 
  }

  gotoDashboardPage() {
    this.navCtrl.push('DashboardPage');
  }

  openModal() {
    let myModal = this.modalCtrl.create(EmergencyContactModalPage);
    myModal.present();

  }
  
  checkUser() {
    var tempEmail = this.userDetails.value.emailAddress
    this.storage.get('emailAddress').then((value) => {
      
            console.log('this is the user email that is stored', this.userDetails.value);
      
            if(tempEmail != value) {
      
              this.doLocalShit();
            } else
            {
              this.errorToast();
            }
          }).catch((e) => {
            console.log(e);
          });
  }

  doLocalShit() { 
        this.storage.set('user_pin', this.userDetails.value.pin1 + this.userDetails.value.pin2 +this.userDetails.value.pin3 +this.userDetails.value.pin4);
    
        this.storage.set('emailAddress', this.userDetails.value.emailAddress);

        this.storage.set('emergency1', {
          telephone: this.userDetails.value.contact1Tel,
          contact_name: this.userDetails.value.contact1Name
        });

        this.storage.set('emergency2', {
          telephone: this.userDetails.value.contact2Tel,
          contact_name: this.userDetails.value.contact2Name
        }) ;      
        
        this.storage.set('emergency3', {
          telephone: this.userDetails.value.contact3Tel,
          contact_name: this.userDetails.value.contact3Name
        });

        
      this.presentToast();
      console.log('locally stored!');
      this.navCtrl.push('LoginPage');

}   


  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Account was created successfully',
      duration: 3000,
      position: 'top',
      cssClass: "toast-success",
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }  

  
  errorToast() {
    let toast = this.toastCtrl.create({
      message: 'Account already exists!',
      duration: 3000,
      position: 'top',
      cssClass: "toast-error",
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();

  }  
  


 
}
