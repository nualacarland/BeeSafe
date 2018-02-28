import { YoutubePipe } from './../pipes/youtube/youtube';
import { Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { IonicStorageModule } from '@ionic/storage';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmergencyContactModalPage } from '../pages/emergency-contact-modal/emergency-contact-modal';
import { PlanModalPage } from '../pages/plan-modal/plan-modal';
import { DistractionsInfoModalPage } from '../pages/distractions-info-modal/distractions-info-modal';
import { TriggerModalPage } from '../pages/trigger-modal/trigger-modal';
import { Camera } from '@ionic-native/camera';
import { AffirmationModalPage } from '../pages/affirmation-modal/affirmation-modal';
import { Keyboard } from 'ionic-angular';




@NgModule({
  declarations: [
    MyApp,
    EmergencyContactModalPage,
    PlanModalPage,
    DistractionsInfoModalPage,
    AffirmationModalPage,
    TriggerModalPage,
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
        backButtonText: '',
        mode: 'ios'
 
    }),
    IonicStorageModule.forRoot()
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EmergencyContactModalPage,
    PlanModalPage,
    DistractionsInfoModalPage,
    AffirmationModalPage,
    TriggerModalPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Toast,
    Camera,
    YoutubeVideoPlayer,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler,}
  ]
})
export class AppModule {}
