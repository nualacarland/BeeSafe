import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MockProvider } from '../../app/models/provider';
// import { Refresher } from 'ionic-angular';

 
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})

export class DashboardPage {

  public quotesArray: any[] = [];
  public randomQuote: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
      this.quotesArray.push('Lorem ipsum dolor sit amet');
      this.quotesArray.push('Lorem ipsum dolor sit amet');
      this.quotesArray.push('Lorem ipsum dolor sit amet');
      this.quotesArray.push('Lorem ipsum dolor sit amet');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.setInterval();
    this.quotesArray[Math.floor(Math.random() * this.quotesArray.length)];
    console.log('randomQuoteIs...' , this.randomQuote);
    
  }

  gotoHelpNowPage(){
    this.navCtrl.push('HelpNowPage');
  }
  gotoBeeSafePlanPage() {
    this.navCtrl.push('BeeSafePlanPage');
  }
  gotoScrapbookPage() {
    this.navCtrl.push('ScrapbookPage');
  }
  gotoCreateBeesafePlanPage() {
    this.navCtrl.push('CreateBeesafePlanPage');
  }

  
  setInterval(){
    this.randomQuote = this.quotesArray[Math.floor(Math.random() * this.quotesArray.length)]; // this'll get the quote depending on your array length
  }



  }


