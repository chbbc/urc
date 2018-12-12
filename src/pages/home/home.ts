import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { SharePage } from '../share/share';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tokens : number = 10; //change when use API

  public sharePage : any = SharePage;

  //Dados do cartão de crédito
  public number : string = "";
  public name : string = "";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    //call API to have user tokens
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

  onShare() {
    this.navCtrl.push(this.sharePage);
  }

}
