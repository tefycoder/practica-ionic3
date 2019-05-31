import { Component } from '@angular/core';
import { NavController,ModalController, AlertController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-card-image',
  templateUrl: 'card-image.html'
})
export class CardImagePage {
  cards = [
    {
      icon: 'calendar',
      time: { subtitle: 'January', title: '29' },
      imageUrl: 'http://limacitykings.com/wp-content/uploads/2017/12/la-rosa-nautica-restaurant-miraflores-lamb-600x419.jpg',
      title: 'Nine Inch Nails Live',
      description: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.'
    },
    {
      icon: 'calendar',
      time: { subtitle: 'January', title: '29' },
      imageUrl: 'http://limacitykings.com/wp-content/uploads/2017/12/la-rosa-nautica-restaurant-miraflores-dining-room-600x450.jpg',
      title: 'Erykah Badu',
      description: 'American singer-songwriter, record producer, activist, and actress, Badu\'s style is a prime example of neo-soul.'
    },
    {
      icon: 'calendar',
      time: { subtitle: 'January', title: '29' },
      imageUrl: 'http://limacitykings.com/wp-content/uploads/2017/12/la-rosa-nautica-restaurant-miraflores-dining-room-600x450.jpg',
      title: 'Queen',
      description: 'The British rock band formed in London in 1970, and is considered one of the biggest stadium rock bands in the world.'
    },
    
    ];

  constructor(public navCtrl: NavController,
    
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    
    
    
    ) { }

  cardTapped(card) {
    alert(card.title + ' was tapped.');
  }

  share(card) {
    alert(card.title + ' was shared.');
  }

  listen(card) {
    alert('Listening to ' + card.title);
  }

  favorite(card) {
    alert(card.title + ' was favorited.');
  }


  openHintModal() {
    this.openModal('HintModalPage');
  }

  openWalkthroughModal() {
    this.openModal('WalkthroughModalPage');
  }

  openSignupModal() {
    this.openModal('SignupModalPage');
  }


   openModal(pageName) {
    this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' })
                  .present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }

}
