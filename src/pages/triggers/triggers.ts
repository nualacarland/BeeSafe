import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, ItemSliding } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { TriggerModalPage } from '../trigger-modal/trigger-modal';


/**
 * Generated class for the TriggersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-triggers',
  templateUrl: 'triggers.html',
})
export class TriggersPage {

  activeItemSliding: ItemSliding = null;
  
  items = [
    {
      trigger_title: 'Arguing with Friends',
    },
    {
      trigger_title: 'Parents',
    },
    {
      trigger_title: 'School Work',
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TriggersPage');
  }

/*Navigation*/
  openModal() {
    let myModal = this.modalCtrl.create(TriggerModalPage);
    myModal.present();
  }

  gotoHelpNow() {
    this.navCtrl.push('HelpNowPage');
  }
  gotoCreateMyBeeSafePlan() {
    this.navCtrl.push('CreateBeesafePlanPage');
  }

  gotoAddPage() {
    this.navCtrl.push('AddTriggerPage');
  }

  addItem(){
  	console.log('add item');
    this.items.push({trigger_title: "" });
    this.navCtrl.push('AddTriggerPage');
  }

  deleteItem(list, index) {
    list.splice(index,1);
  }

  

  openOption(itemSlide: ItemSliding, item: Item, event) {
    console.log('opening item slide..');
    event.stopPropagation(); // here if you want item to be tappable
    if (this.activeItemSliding) { // use this so that only one active sliding item allowed
      this.closeOption();
    }
    

    this.activeItemSliding = itemSlide;
    const swipeAmount = 1; // set your required swipe amount

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


