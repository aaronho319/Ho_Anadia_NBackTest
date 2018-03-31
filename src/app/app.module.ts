import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { MainMenuPage } from '../pages/main-menu/main-menu'
import { GamePage } from '../pages/game/game';
import { StatisticsPage } from '../pages/statistics/statistics';
import { SettingsPage } from '../pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    MainMenuPage,
    GamePage,
    SettingsPage,
    StatisticsPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicPageModule.forChild(MainPage),
    IonicPageModule.forChild(MainMenuPage),
    IonicPageModule.forChild(GamePage),
    IonicPageModule.forChild(SettingsPage),
    IonicPageModule.forChild(StatisticsPage)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    MainMenuPage,
    GamePage,
    SettingsPage,
    StatisticsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
