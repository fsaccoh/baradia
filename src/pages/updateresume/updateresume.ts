import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { BasicinfoPage } from '../basicinfo/basicinfo';
@Component({
  selector: 'page-updateresume',
  templateUrl: 'updateresume.html'
})
export class UpdateresumePage {

  constructor(public navCtrl: NavController) {

  }
 
 basicinfo(){
        this.navCtrl.push(BasicinfoPage)
  }

}
