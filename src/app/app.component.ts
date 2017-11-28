import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ModalController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl: ModalController, private sqlite: SQLite) {
    this.initializeApp();

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
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log(page);
    if(page.component == 'HelpNowPage'){
      this.nav.push(page.component);
      // this.nav.setBack
    }else{
      this.nav.setRoot(page.component);
      
    }

  }
  
databas() {
this.sqlite.create({
  name: 'data.db',
  location: 'default'
})
  .then((db: SQLiteObject) => {


    db.executeSql('create table danceMoves(name VARCHAR(32))', {})
      .then(() => console.log('Executed SQL'))
      .catch(e => console.log(e));


  })
  .catch(e => console.log(e));

}


}
 