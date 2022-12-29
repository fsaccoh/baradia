import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { ConversationsPage } from '../conversations/conversations';
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

  constructor(public navCtrl: NavController) {

  }
  
conversations(){
        this.navCtrl.push(ConversationsPage)
  }

}
