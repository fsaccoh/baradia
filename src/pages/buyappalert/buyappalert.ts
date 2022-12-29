import { Component } from '@angular/core';
import { NavController, ModalController, ViewController, LoadingController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-buyappalert',
  templateUrl: 'buyappalert.html'
})
export class BuyAppAlertPage {
  loading: any;
  loadingShown: boolean;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private viewCtrl: ViewController,
    public inAppBrowser: InAppBrowser, private http: HttpClient, private loadingCtrl: LoadingController, private translate: TranslateService) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onCodecanoyon() {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    this.inAppBrowser.create('https://bit.ly/cc2_Jobber', '_system', options);
  }
  presentLoading(message: string) {
    this.loading = this.loadingCtrl.create({
      content: message
    });
    this.loading.onDidDismiss(() => { });
    this.loading.present();
    this.loadingShown = true;
  }

  dismissLoading() {
    if (this.loadingShown) {
      this.loadingShown = false;
      this.loading.dismiss();
    }
  }
 
  onwhatsapp() {
    let projectName = "Jobber";
    this.http.get<any>("https://dashboard.vtlabs.dev/whatsapp.php?product_name=" + projectName + "&source=ionic_template", {
      headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
    }).subscribe(res => {
      window.open(res['link'], '_system', 'location=no');
    }, err => { });

    this.dismiss();
  }
}
