import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';



import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmergencyContactModalPage } from '../pages/emergency-contact-modal/emergency-contact-modal';
import { PlanModalPage } from '../pages/plan-modal/plan-modal';

@NgModule({
  declarations: [
    MyApp,
    EmergencyContactModalPage,
    PlanModalPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EmergencyContactModalPage,
    PlanModalPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
