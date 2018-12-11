import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-card',
  templateUrl: 'register-card.html',
})
export class RegisterCardPage {

  public homePage : any = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
          public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterCardPage');
  }

  onRegisterCard(){
    let alert = this.alertCtrl.create({
      title: "Cadastre seu cartão",
      subTitle: "Cadastre o seu cartão de crédito para ganhar mais pontos",
      inputs: [{
        name: "Nº do cartão de crédito",
        placeholder: "XXXX.XXXX.XXXX.XXXX",
        type: "number"
      }, {
        name: "Nome escrito no cartão",
        placeholder: "Maria feliz de Souza",
        type: "text"
      }],
      buttons: [{
        text: "Cadastrar",
        handler: () => {
          this.navCtrl.setRoot(this.homePage);
        }
      }, {
        text: "Cancelar",
        handler: () => {
          alert.dismiss();
        }
      }]
    })

    alert.present();
  }

}
