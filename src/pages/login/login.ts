import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public homePage : any = HomePage;

  public address : string = ""; //change when use API

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLogin() {
    //call Login
    this.navCtrl.setRoot(this.homePage);
  }

}
