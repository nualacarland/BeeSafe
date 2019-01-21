import { LoginPage } from './../login/login';
import { DashboardPage } from './../dashboard/dashboard';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, RadioGroup } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { EmergencyContactModalPage } from '../emergency-contact-modal/emergency-contact-modal';
import { ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';
import { AffirmationModalPage } from '../affirmation-modal/affirmation-modal';



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


export class RegisterPage {
  alertEvent: boolean;
  nav: any;
  value: any;
  
  private db: SQLiteObject;
  private userDetails : FormGroup;
  val: any;
  // toggleStatus: any;
  // toggleAlert: any;
  private avatarsArray: any;
  private itemList;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public modalCtrl: ModalController, private toastCtrl: ToastController,
    private formBuilder: FormBuilder, private storage: Storage, public menu: MenuController){

      this.avatarsArray = [
        {
          title: 'avatar1',
          image: 'assets/imgs/avatar-heart.png'
        },
        {
          title: 'avatar2',
          image: 'assets/imgs/avatar-car.png'
        },
        {
          title: 'avatar3',
          image: 'assets/imgs/avatar-flower.png'
        },
        {
          title: 'avatar4',
          image: 'assets/imgs/avatar-star.png'
        },
        {
          title: 'avatar5',
          image: 'assets/imgs/avatar-football.png'
        },
        {
          title: 'avatar6',
          image: 'assets/imgs/avatar-music.png'
        }
      ];

      this.userDetails = this.formBuilder.group({

        emailAddress: ['', Validators.required],
        pin1: ['', Validators.required],
        pin2: ['', Validators.required],
        pin3: ['', Validators.required],
        pin4: ['', Validators.required],
        avatar: ['', Validators.required],
        // selectedItem: ['', Validators.required],
        contact1Tel: ['', Validators.required],
        contact1Name: ['', Validators.required],
        contact2Tel: ['', Validators.required],
        contact2Name: ['', Validators.required],
        contact3Tel: ['', Validators.required],
        contact3Name: ['', Validators.required],
        alertControl: [false]
   
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
    // this.menu.enable(false);
    console.log(this.avatarsArray);
  }

  moveFocus(nextElement) {
    nextElement.setFocus();
  }

  gotoDashboardPage() {
    this.navCtrl.push('DashboardPage');
  }

  openModal() {
    let myModal = this.modalCtrl.create(EmergencyContactModalPage);
    myModal.present();

  }

  openAffirModal(){
    let Modal = this.modalCtrl.create(AffirmationModalPage);
   Modal.present();
  }

  showConfirmAlert(selectedRadio: any){
    console.log('what is in the form avatar value', this.userDetails.value.avatar);
   
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

        this.storage.set('avatar', this.userDetails.value.avatar);
        
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

}   

alertEventChange(){
  this.alertEvent = this.alertEvent ? false: true;
  console.log(this.alertEvent);
  this.storage.set('alertEvent', this.alertEvent);
  console.log('are affirmations saved as on or off?', this.alertEvent);
  
 
  
}

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Account was created successfully',
      duration: 1500,
      position: 'top',
      cssClass: "toast-success beesafe-toast",

    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
      this.navCtrl.push('LoginPage');

    });
    toast.present();
  }  

  
  errorToast() {
    let toast = this.toastCtrl.create({
      message: 'Account already exists!',
      duration: 1500,
      position: 'top',
      cssClass: "toast-error beesafe-toast",
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();

  }  
  


 
}
