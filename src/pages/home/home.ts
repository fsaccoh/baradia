import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { LocationsearchPage } from '../locationsearch/locationsearch';
 import { UpdateresumePage } from '../updateresume/updateresume';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
experience: string = "years";
  constructor(public navCtrl: NavController) {

  }

 
 locationsearch(){
        this.navCtrl.push(LocationsearchPage)
  }
  updateresume(){
        this.navCtrl.push(UpdateresumePage)
  }

}
