import { Component } from '@angular/core';
import { ViewController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup-modal',
  templateUrl: 'signup-modal.html'
})
export class SignupModalPage {

  slides = [
    {
      id: 1,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXuNqUvumAKr3dV4tlE15SWltovoAlzL5o-WyqyykeA25hmDOw',
    },
    {
      id: 2,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bDlGYGud1a54aXlEWMOwp9rNiuWtAMck9nQhEAXQ1GJLUkPORw',
    },
    {
      id: 3,
      imageUrl: 'https://cdne.diariocorreo.pe/thumbs/uploads/img/2018/03/23/semana-santa-del-centro-historico-de-lima-es-decla-809686-jpg_604x0.jpg',
    },
  ];

  constructor(public viewCtrl: ViewController) {
  }

  signup() {
    this.viewCtrl.dismiss();
  }

  login() {
    this.viewCtrl.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
