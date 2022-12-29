import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';

 import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-resumesent',
  templateUrl: 'resumesent.html'
})
export class ResumesentPage {

  constructor(public navCtrl: NavController,   public viewCtrl: ViewController) {

  }
dismiss() {
		this.viewCtrl.dismiss();
	}
   
 tabs(){
        this.navCtrl.setRoot(TabsPage)
  }
}
