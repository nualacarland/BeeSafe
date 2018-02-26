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

  // private _data = [
  //   'Affirmation 1',
  //   'Affirmation 2',
  //   'Affirmation 3',
  //   'Affirmation 4',

  // ];

  public quotesArray: any[] = [];
  public randomQuote: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
      this.quotesArray.push('Affirmation 1');
      this.quotesArray.push('Affirmation 2');
      this.quotesArray.push('Affirmation 3');
      this.quotesArray.push('Affirmation 4');

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




  // private _getRandomData() {
  //   let i = Math.floor( Math.random() * this._data.length );
  //   return this._data[i];
  
  // }

  // getData(): any[] {
  //   // return mock data synchronously
  //   let data: any[] = [];
  //   for (var i = 0; i < 3; i++) {
  //     data.push( this._getRandomData() );
  //   }
  //   return data;
  // }

  // getAsyncData(): Promise<any[]> {
  //   // async receive mock data
  //   return new Promise(resolve => {

  //     setTimeout(() => {
  //       resolve(this.getData());
  //     }, 1000);

  //   });
  }


