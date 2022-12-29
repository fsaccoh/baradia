import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {

  }
 
 tabs(){
        this.navCtrl.setRoot(TabsPage)
  }

}
