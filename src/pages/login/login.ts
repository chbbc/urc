import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegisterCardPage } from '../register-card/register-card';

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

  public registerCardPage : any = RegisterCardPage;

  public cpf : string = "100.262.104-60"; //change when use API

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onRegisterCard() {
    //call Login
    this.navCtrl.setRoot(this.registerCardPage, {cpf : this.cpf});
  }

}
