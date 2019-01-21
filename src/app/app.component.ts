import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ModalController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  users: any[];
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';
  private avatar;
  private avatarsArray: any;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl: ModalController, private storage: Storage) {

    this.initializeApp();
    this.avatarsArray = [
      
      {
        title: 'avatar1',
        image: 'assets/imgs/avatar-heart.png'
      },
      {
        title: 'avatar2',
        image: 'assets/imgs/avatar-car.png'
      },
      {
        title: 'avatar3',
        image: 'assets/imgs/avatar-flower.png'
      },
      {
        title: 'avatar4',
        image: 'assets/imgs/avatar-star.png'
      },
      {
        title: 'avatar5',
        image: 'assets/imgs/avatar-football.png'
      },
      {
        title: 'avatar6',
        image: 'assets/imgs/avatar-music.png'
      }
    ];


    this.storage.get('avatar').then((value) => {
      this.avatar = value;
        console.log('What is the chosen avatar', value);
    });


    // used for an example of ngFor and navigation
    this.pages = [  
      { title: 'Home', component: 'DashboardPage'},
      { title: 'Help Now', component: 'HelpNowPage' },
      { title: 'Bee Safe', component: 'BeeSafePlanPage' },
      { title: 'My Scrapbook', component: 'ScrapbookPage'},
      { title: 'Create Your Plan', component: 'CreateBeesafePlanPage' },
      { title: 'Resources', component: 'ResourcesPage'},
      { title: 'My Profile', component: 'ProfilePage'},
      { title: 'Disclaimer', component: 'DisclaimerPage'},
      { title: 'Tour', component: 'TourPage'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.hide();
      // this.statusBar.overlaysWebView(false);
      this.splashScreen.hide();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log(page);
    if(page.component == 'HelpNowPage', 'DashboardPage', 'BeeSafePlanPage', 'ScrapbookPage', 'CreateBeesafePlanPage', 'ResourcesPage', 'ProfilePage', 'DisclaimerPage'){
      this.nav.push(page.component);
      // this.nav.setBack
    }else{
      this.nav.setRoot(page.component);

      
    }

  }




}
