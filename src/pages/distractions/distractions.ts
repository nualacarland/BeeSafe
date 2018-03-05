import { Distraction } from './../../app/models/distraction';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, ItemSliding } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { DistractionsInfoModalPage } from '../distractions-info-modal/distractions-info-modal';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { reorderArray } from 'ionic-angular/util/util';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


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
  
  private userDetails;
  private distractionIndex;
  private items: Distraction;
  trustedVideoUrl: SafeResourceUrl;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
              private storage: Storage, private formBuilder: FormBuilder, private domSanitizer: DomSanitizer ) {

    this.userDetails = this.formBuilder.group({
      
      distractionTitle: ['', Validators.required],
      distraction: ['', Validators.required],
      galleryPhoto: [''],
      websiteLink: [''],
      youtubeLink: ['']

    });

  }



  ionViewWillEnter(){
    console.log('ionViewDidLoad DistractionsPage');
    this.storage.get('distractions').then((val)=>{
      console.log('What is the value of the distractions array',val);
      this.items = val;

    });
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
  
  deleteItem(items, index){
    this.items.splice(index, 1);
    this.storage.set('distractions',  this.items);
  }

  
  gotoEditPage(item: any, index){

    this.navCtrl.push('EditDistractionPage', {item, index});
    
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
