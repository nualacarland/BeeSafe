import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScrapbookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scrapbook',
  templateUrl: 'scrapbook.html',
})
export class ScrapbookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ScrapbookPage');
    // this.posts = [
    //   {
    //     description: 'Date Added',
        
    //   },
    //   {
    //     description: 'Date Added',
    //     image: 'https://s-media-cache-ak0.pinimg.com/236x/43/f3/3d/43f33de6f96ca8e6f8dc6ff1ad86b586.jpg'
    //   },
    //   {
    //     description: 'Date Added',
    //     image: 'https://s-media-cache-ak0.pinimg.com/236x/68/68/a2/6868a2f821e5d15cc8fcd8cfa1694606.jpg'
    //   },
     
    //   {
    //     description: 'Date Added',
    //     image: 'https://s-media-cache-ak0.pinimg.com/564x/5f/bf/34/5fbf3414f9de301c8f4b868b1c2e2339.jpg'
    //   },
    // ];
  }
  gotoAddMemory() {
    this.navCtrl.push('ScrapbookMemoryPage');
  } 

  gotoHelpNowPage(){
    this.navCtrl.push('HelpNowPage');
  }
   
 
}
