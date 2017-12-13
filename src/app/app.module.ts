import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmergencyContactModalPage } from '../pages/emergency-contact-modal/emergency-contact-modal';
import { PlanModalPage } from '../pages/plan-modal/plan-modal';
import { DistractionsInfoModalPage } from '../pages/distractions-info-modal/distractions-info-modal';
import { TriggerModalPage } from '../pages/trigger-modal/trigger-modal';
// import { PinDialog } from '@ionic-native/pin-dialog';
import { Camera, CameraOptions } from '@ionic-native/camera';


@NgModule({
  declarations: [
    MyApp,
    EmergencyContactModalPage,
    PlanModalPage,
    DistractionsInfoModalPage,
    TriggerModalPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
        backButtonText: 'Back'
    }),
    IonicStorageModule.forRoot()
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EmergencyContactModalPage,
    PlanModalPage,
    DistractionsInfoModalPage,
    TriggerModalPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Toast,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler,}
  ]
})
export class AppModule {}
