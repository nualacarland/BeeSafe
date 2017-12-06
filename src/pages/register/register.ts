import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { EmergencyContactModalPage } from '../emergency-contact-modal/emergency-contact-modal';
import { ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';


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
  nav: any;
  value: any;
  
  private db: SQLiteObject;

  private userDetails : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private toastCtrl: ToastController,
    private formBuilder: FormBuilder, private sqlite: SQLite){

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

      this.sqlite.create({
        name: 'BeeSafe.db',
        location:'default',
        
      })
     
      .then((db: SQLiteObject) => {
        console.log("database created");
        this.db = db;
    
      })
      .catch(e => console.log(e));
  }


  createAccount(){
    console.log('What is in the form? ', this.userDetails.value);
    this.checkUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  gotoDashboardPage() {
    this.navCtrl.push('DashboardPage');
  }

  openModal() {
    let myModal = this.modalCtrl.create(EmergencyContactModalPage);
    myModal.present();

  }


  checkUser(){
    //TODO: Do your check to see if the user exists via SQL if they do not insert them, then present your toast
    console.log('Yo we in the check user now');

    // if((this.userDetails.value.emailAddress('user_email') === null)){
    //   this.errorToast();
    // } 
    // if(this.userDetails.value.emailAddress == ""){
    //   this.errorToast();
    // || this.userDetails.value.emailAddress('user_email') === null)
    // }
   
    console.log('INSIDE CHECK USER FUNC', this.userDetails.value);
    this.db.executeSql("Cr (SELECT * FROM USERS WHERE NOT EXISTS AND 'user_email' = ?)", {} [
      this.userDetails.value.emailAddress
    ]
    ).then((data) => {
      console.log(data);

      if(data.length > 0){
        //TODO: records have been found so user already exists
        console.log('User Details already exist');
        this.errorToast();
      }else {
       this.insertUser()
       console.log('User inserted to db!')
     
      }
    
  }, (e) => {

      console.log("Error: " + JSON.stringify(e));
  });

  }

  insertUser(){

    var tempPin = this.userDetails.value.pin1 + this.userDetails.value.pin2 + this.userDetails.value.pin3 + this.userDetails.value.pin4;

    console.log('this should be your 4 digit pin for the user ',tempPin);

    //TODO: Do your insert statement here, you always have access to this.userDetails.value which is the form inputs and you will always know it is valid.
    this.db.executeSql("INSERT INTO USERS VALUES (user_id, user_pin, user_email)", [
      null,
      tempPin,
      this.userDetails.value.emailAddress,
    ]
    ).then((data) => {
      console.log(data);
      // this.doLocalShit()
      if(this.userDetails.valid) {
      this.nav.push();
    }
      this.presentToast()
      
  }, (e) => {
      console.log("Error: " + JSON.stringify(e));
  });
  }

//   // onSubmit(value: any): void { 
//     if(this.userDetails.valid) {
//         window.localStorage.setItem('user_pin', value.user_pin);
//         window.localStorage.setItem('user_email', value.user_email);

//       this.nav.push();
//     }
// }   


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
