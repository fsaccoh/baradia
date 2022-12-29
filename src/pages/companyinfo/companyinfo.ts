import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-companyinfo',
  templateUrl: 'companyinfo.html'
})
export class CompanyinfoPage {
tab: string = "about";
  constructor(public navCtrl: NavController) {

  }

}
