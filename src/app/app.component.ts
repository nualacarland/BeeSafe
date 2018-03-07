import { DashboardPage } from './../pages/dashboard/dashboard';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ModalController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  users: any[];
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';
  private avatars;
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
      this.avatars = value;
        console.log('What is the chosen avatar', value);
    });


    // used for an example of ngFor and navigation
    this.pages = [  
      { title: 'Home', component: 'DashboardPage'},
      { title: 'Help Right Now', component: 'HelpNowPage' },
      { title: 'Bee Safe Plan', component: 'BeeSafePlanPage' },
      { title: 'Scrapbook', component: 'ScrapbookPage'},
      { title: 'Creating my Bee Safe Plan', component: 'CreateBeesafePlanPage' },
      { title: 'Resources', component: 'ResourcesPage'},
      { title: 'My Profile', component: 'ProfilePage'},
      { title: 'Disclaimer', component: 'DisclaimerPage'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
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

ionViewDidLoad(){
  this.storage.get('avatars').then((val) =>{
    console.log('what is the value of the avatar', val);
  
});
}

ionViewDidEnter(){
  this.storage.get('avatars').then((val) =>{
    console.log('what is the value of the avatar', val);

});
}







}
