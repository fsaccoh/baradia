import { Component, Inject, ViewChild } from '@angular/core';
import { Events, ModalController, Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { APP_CONFIG, AppConfig } from './app.config';
import { TranslateService } from '../../node_modules/@ngx-translate/core';
// import { Globalization } from '@ionic-native/globalization';
import { Constants } from '../models/constants.models';
import { Vt_popupPage } from '../pages/vt_popup/vt_popup';
import { TabsPage } from '../pages/tabs/tabs';
import { ManagelanguagePage } from '../pages/managelanguage/managelanguage';
import { Helper } from '../models/helper.models';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  rtlSide: string = "left"
  @ViewChild(Nav) nav: Nav;

  constructor(@Inject(APP_CONFIG) private config: AppConfig, private platform: Platform, private statusBar: StatusBar,
    private splashScreen: SplashScreen, public translate: TranslateService, private modalCtrl: ModalController, private events: Events) {
    this.initializeApp();
    events.subscribe('language:selection', (language) => {
      this.globalize(language);
    });
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      this.globalize(defaultLang);
      this.darkModeSetting();
      if (this.config.demoMode && this.platform.is('cordova') && !window.localStorage.getItem(Constants.KEY_IS_DEMO_MODE)) {
        window.localStorage.setItem(Constants.KEY_IS_DEMO_MODE, "true");
        this.change_language();
        setTimeout(() => this.presentModal(), 30000);
      }
    });
  }

  globalize(languagePriority) {
    this.translate.setDefaultLang("en");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }


  setDirectionAccordingly(lang: string) {
    this.rtlSide = "left";
    switch (lang) {
      case 'ar': {
        this.platform.setDir('ltr', false);
        this.platform.setDir('rtl', true);
        this.rtlSide = "right";
        break;
      }
      default: {
        this.platform.setDir('rtl', false);
        this.platform.setDir('ltr', true);
        break;
      }
    }
  }

  getSideOfCurLang() {
    return this.platform.dir() === 'rtl' ? "right" : "left";
  }

  getSuitableLanguage(language) {
    language = language.substring(0, 2).toLowerCase();
    console.log('check for: ' + language);
    return this.config.availableLanguages.some(x => x.code == language) ? language : 'en';
  }


  async presentModal() {
    let modal = this.modalCtrl.create(Vt_popupPage);
    modal.onDidDismiss((data) => { });
    await modal.present();
  }

  change_language() {
    this.nav.push(ManagelanguagePage);
  }
  darkModeSetting() {
    document.body.setAttribute('class', (Helper.getThemeMode(this.config.defaultThemeMode) == Constants.THEME_MODE_DARK ? 'dark-theme' : 'light-theme'));
  }
}
