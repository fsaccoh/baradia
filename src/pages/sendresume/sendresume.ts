import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

  import { ResumesentPage } from '../resumesent/resumesent';
@Component({
  selector: 'page-sendresume',
  templateUrl: 'sendresume.html'
})
export class SendresumePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

 resumesent() {
    let modal = this.modalCtrl.create(ResumesentPage);
    modal.present();
  } 

}
