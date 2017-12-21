import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, ItemSliding } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { DistractionsInfoModalPage } from '../distractions-info-modal/distractions-info-modal';


/**
 * Generated class for the DistractionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-distractions',
  templateUrl: 'distractions.html',
})
export class DistractionsPage {

  activeItemSliding: ItemSliding = null;
  
    items = [
      {
        distraction_title: 'Math Studies',
      },
      {
        distraction_title: 'Listening to Music',
      },
      {
        distraction_title: 'Calling a Friend',
      },
    ];


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DistractionsPage');
  }

  openModal() {
    let myModal = this.modalCtrl.create(DistractionsInfoModalPage);
    myModal.present();
  }
  gotoHelpNowPage() {
    this.navCtrl.push('HelpNowPage');
  }
  gotoCreateBeeSafePlanPage() {
    this.navCtrl.push('CreateBeesafePlanPage');
  }

  gotoAddDistractionPage() {
    this.navCtrl.push('AddDistractionPage');

  }


  addItem(){
    console.log('add item');
    this.items.push({distraction_title: ""});
  }

  deleteItem(list, index) {
    list.splice(index, 1)
  }

 
  openOption(itemSlide: ItemSliding, item: Item, event) {
    console.log('opening item slide..');
    event.stopPropagation(); // here if you want item to be tappable
    if (this.activeItemSliding) { // use this so that only one active sliding item allowed
      this.closeOption();
    }

    this.activeItemSliding = itemSlide;
    const swipeAmount = 33; // set your required swipe amount

    console.log('swipe amount ', swipeAmount);
    itemSlide.startSliding(swipeAmount);
    itemSlide.moveSliding(swipeAmount);

    itemSlide.setElementClass('active-slide', true);
    itemSlide.setElementClass('active-options-right', true);
    item.setElementStyle('transition', null);
    item.setElementStyle('transform', 'translate3d(-' + swipeAmount + 'px, 0px, 0px)');
  }

  closeOption() {
    console.log('closing item slide..');

    if (this.activeItemSliding) {
      this.activeItemSliding.close();
      this.activeItemSliding = null;
    }
  }


}
