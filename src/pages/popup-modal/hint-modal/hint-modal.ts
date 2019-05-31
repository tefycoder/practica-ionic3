import { Component } from '@angular/core';
import { NavParams, ViewController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-hint-modal',
  templateUrl: 'hint-modal.html'
})
export class HintModalPage {
  myParam: string;
  cards = [
 
    {
      imageUrl: 'assets/img/card/advance-card-map-paris.png',
      name: 'Perú',
      ETA: '26 min',
      distance: 8.1,
      places: [
        {
          name: 'Museo',
          address: 'Lima',
          icon: 'information-circle'
        },
        {
          name: 'Museo',
          address: 'Lima',
          icon: 'leaf'
        }
      ]
    },
  ];





  constructor(
    public viewCtrl: ViewController,
    params: NavParams
  ) {
    this.myParam = params.get('myParam');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  placeTapped(place) {
    alert(place.name + ' was tapped.');
  }

  getDirections(card) {
    alert('Getting directions to ' + card.name);
  }

  seeInMap(card) {
    alert('Seeing ' + card.name + ' on maps.');
  }

}
