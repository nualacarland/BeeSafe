import { Trigger } from './../../app/models/trigger';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, ItemSliding } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { TriggerModalPage } from '../trigger-modal/trigger-modal';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


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

  private items;
  private userDetails;

 
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private storage: Storage, private formBuilder: FormBuilder) {
        this.userDetails = this.formBuilder.group({

          triggerTitle: ['', Validators.required]

    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TriggersPage');
    this.storage.get('triggers').then((val) =>{
      console.log('What is the value of the trigger', val);
      this.items = val;
    
    })
  }


  ionViewDidEnter() {
    console.log('ionViewDidEnter TriggersPage');
    this.storage.get('triggers').then((val) => {
      console.log('What is the value of the trigger', val);
      this.items = val;
    })
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

  gotoAddPage(){
    this.navCtrl.push('AddTriggerPage');
  }

  gotoEditPage(triggerIndex: number){


    this.navCtrl.push('UpdateTriggerPage', { 'triggerIndex': triggerIndex });
  }


  deleteItem(list, index){
    this.items.splice(index, 1);
    this.storage.set('triggers',  this.items);

  }

  openOption(itemSlide: ItemSliding, item: Item, event) {
    console.log('opening item slide..');
    event.stopPropagation(); 
    if (this.activeItemSliding) { 
      this.closeOption();
    }
    
    this.activeItemSliding = itemSlide;
    const swipeAmount = 1; 

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


