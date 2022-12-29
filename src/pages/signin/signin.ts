import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { PasswordPage } from '../password/password';
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(public navCtrl: NavController) {

  }
 
 tabs(){
        this.navCtrl.setRoot(TabsPage)
  }
  signup(){
        this.navCtrl.push(SignupPage)
  } 
  password(){
        this.navCtrl.push(PasswordPage)
  }


}
