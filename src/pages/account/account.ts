import { Component, Inject } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { NotificationPage } from '../notification/notification';
import { ConditionsPage } from '../conditions/conditions';
import { SigninPage } from '../signin/signin';
import { AppConfig, APP_CONFIG } from '../../app/app.config';
import { ManagelanguagePage } from '../managelanguage/managelanguage';
import { BuyAppAlertPage } from '../buyappalert/buyappalert'; 
@Component({
      selector: 'page-account',
      templateUrl: 'account.html'
})
export class AccountPage {

      constructor(@Inject(APP_CONFIG) private config: AppConfig, public navCtrl: NavController, public modalCtrl: ModalController) { }


      notification() {
            this.navCtrl.push(NotificationPage)
      }

      conditions() {
            this.navCtrl.push(ConditionsPage)
      }

      signin() {
            this.navCtrl.setRoot(SigninPage)
      }
      manageLanguage() {
            this.navCtrl.push(ManagelanguagePage);
      }

      developed_by() {
            window.open("https://opuslab.works/", "_system", 'location=no');
      }

      buyThisApp() {
            let profileModal = this.modalCtrl.create(BuyAppAlertPage);
            profileModal.present();
      }
}
