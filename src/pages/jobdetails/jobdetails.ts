import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { SendresumePage } from '../sendresume/sendresume';
 import { CompanyinfoPage } from '../companyinfo/companyinfo';
@Component({
  selector: 'page-jobdetails',
  templateUrl: 'jobdetails.html'
})
export class JobdetailsPage {

  constructor(public navCtrl: NavController) {

  }
 

  sendresume(){
        this.navCtrl.push(SendresumePage)
  }
  
  companyinfo(){
        this.navCtrl.push(CompanyinfoPage)
  }


}