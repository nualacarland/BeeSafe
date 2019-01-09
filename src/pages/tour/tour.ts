import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tour',
  templateUrl: 'tour.html',
})
export class TourPage {

  @ViewChild(Slides) slides: Slides;
  @ViewChild(Content) content: Content;

  private showContinue = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,) {


  }
  
  ionViewDidLoad() {
    this.slides.update();
    this.content.resize();    
  }
  ionViewDidEnter() {
    this.slides.update();
    this.content.resize();

}
  goDashboard(){
    this.navCtrl.setRoot('DashboardPage');
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    this.slides.update();
    if(currentIndex >= 2){
      this.showContinue = true;

    }else{
      this.showContinue = false;
    }
  }

}



