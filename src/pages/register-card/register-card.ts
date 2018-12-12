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

  //Dados do usuário
  public cpf : string = "";
  public number : string = "";
  public name : string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
          public alertCtrl: AlertController) {

          this.cpf = this.navParams.get('cpf');
  }

  onRegisterCard(){
    let alert = this.alertCtrl.create({
      title: "Cadastre seu cartão",
      subTitle: "Cadastre o seu cartão de crédito para ganhar mais pontos",
      inputs: [{
        name: "number",
        placeholder: "XXXX.XXXX.XXXX.XXXX",
        type: "number"
      }, {
        name: "name",
        placeholder: "Maria feliz de Souza",
        type: "text"
      }],
      buttons: [{
        text: "Cadastrar",
        handler: data => {
          //call to register user credit card
          this.number = data.number;
          this.name = data.name;
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
