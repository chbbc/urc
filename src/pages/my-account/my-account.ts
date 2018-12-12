import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SharePage } from '../share/share';

/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {

  public sharePage : any = SharePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //get QR Code user
  }

  onShare() {
    this.navCtrl.push(this.sharePage);
  }

}
