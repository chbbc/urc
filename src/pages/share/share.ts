import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  public conta: string = "lalalala";
  public valor : number = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
  }

  onShare() {
    //sendo URCs tokens

    let alert = this.alertCtrl.create({
      title: "Sucesso",
      subTitle: "Os URCs foram enviados com sucesso!",
      buttons: [{
        text: "Ok",
        handler: () => {
          this.navCtrl.pop();
        }
      }]
    });

    alert.present();
  }

}
