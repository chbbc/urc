import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { SharePage } from '../share/share';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tokens : number = 100; //change when use API

  public sharePage : any = SharePage;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    //call API to have user tokens
  }

  onShare() {
    this.navCtrl.push(this.sharePage);
  }

}
