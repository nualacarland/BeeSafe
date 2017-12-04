import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ModalController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

const DATABASE_FILE_NAME: string = "BeeSafe.db";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  private db: SQLiteObject;

  rootPage: any = 'LoginPage';

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl: ModalController, private sqlite: SQLite) {
    this.initializeApp();

    this.createDatabaseFile();

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

ionViewDidLoad(){
  this.createDatabaseFile();
}

private createDatabaseFile(): void {
  console.log('database created successfully!')
  this.sqlite.create({
    name: DATABASE_FILE_NAME,
    location:'default',
    

  })

  .then((db: SQLiteObject) => {
    console.log("database created");
    this.db = db;
    this.createTables();

  })
  .catch(e => console.log(e));

}

private createTables():  void {
  this.db.executeSql("CREATE TABLE IF NOT EXISTS USERS ('user_ID' int(11) auto_increment, 'user_pin' int(80), 'user_emails' varchar(255), PRIMARY KEY ('user_ID')",{})
  .then(() => {
    console.log('Users table created!');

  })
  .catch(e => console.log(e));
}

}
 