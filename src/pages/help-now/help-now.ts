import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// import { CallNumber } from '@ionic-native/call-number';



/**
 * Generated class for the HelpNowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help-now',
  templateUrl: 'help-now.html',
})
export class HelpNowPage {
  
  private emergency1 = {
    telephone: '',
    contact_name: ''
  };
  private emergency2 =  {
    telephone: '',
    contact_name: ''
  };
  private emergency3 = {
    telephone: '',
    contact_name: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, ) {
    
    storage.get('emergency1').then((val) => {
      console.log('What is this value ',val);
      this.emergency1.telephone = val.telephone;
      this.emergency1.contact_name = val.contact_name;
    });

    storage.get('emergency2').then((val) => {
      console.log('What is this value ',val);
      this.emergency2.telephone = val.telephone;
      this.emergency2.contact_name = val.contact_name;
    });

    storage.get('emergency3').then((val) => {
      console.log('What is this value ',val);
      this.emergency3.telephone = val.telephone;
      this.emergency3.contact_name = val.contact_name;
    });


  }


  gotoDashboardPage() {
    this.navCtrl.push('DashboardPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpNowPage');
  }



}
