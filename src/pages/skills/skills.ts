import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

  import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html'
})
export class SkillsPage {

  constructor(public navCtrl: NavController) {

  }

tabs(){
        this.navCtrl.setRoot(TabsPage)
  }

}
