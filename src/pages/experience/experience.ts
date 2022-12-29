import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SkillsPage } from '../skills/skills';
@Component({
  selector: 'page-experience',
  templateUrl: 'experience.html'
})
export class ExperiencePage {

  constructor(public navCtrl: NavController) {

  }
  
  skills(){
        this.navCtrl.push(SkillsPage)
  }

}
