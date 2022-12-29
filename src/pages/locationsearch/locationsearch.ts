import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { JobdetailsPage } from '../jobdetails/jobdetails';
@Component({
  selector: 'page-locationsearch',
  templateUrl: 'locationsearch.html'
})
export class LocationsearchPage {

  constructor(public navCtrl: NavController) {

  }
    
 jobdetails(){
        this.navCtrl.push(JobdetailsPage)
  }

}
