import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ExperiencePage } from '../experience/experience';
@Component({
  selector: 'page-basicinfo',
  templateUrl: 'basicinfo.html'
})
export class BasicinfoPage {

  constructor(public navCtrl: NavController) {

  }
    experience(){
        this.navCtrl.push(ExperiencePage)
  }

}
