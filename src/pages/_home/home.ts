import { Component,ViewChild,ElementRef} from '@angular/core';
import { IonicPage, NavController,AlertController,} from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {Platform} from "ionic-angular";
//import {GoogleMaps, GoogleMap, LatLng, GoogleMapsEvent} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  openMenu = false;
  openMenu2 = false;
  public barcodeData;

 


  constructor(public navCtrl: NavController,
    public barcodeScanner: BarcodeScanner,
    public alertCtrl: AlertController,
   // private platform:Platform,
   // private googleMaps:GoogleMaps,
     ) 
    {
    
     // this.location = new LatLng(42.346903, -71.135101);
   }

   @ViewChild('player') player;
   @ViewChild('map')
   private mapElement:ElementRef;
  // private map:GoogleMap;
  // private location:LatLng;

  // It's interesting to remove the src and put it back
  // when entering and leaving the page so there are no memory leaks.
  ionViewWillLeave() {
    // the .nativeElement property of the ViewChild is the reference to the tag <video>
    this.player.nativeElement.src = '';
    this.player.nativeElement.load();
  }

  ionViewWillEnter() {
    this.player.nativeElement.src = 'assets/video/background-480.mp4';
    this.player.nativeElement.load();
  }



  goToSignup() {
    console.log('');
  }

  goToLogin() {
    console.log('');
  }

  //*sub-menu*/

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }

  togglePopupMenu2() {
    return this.openMenu2 = !this.openMenu2;
  }

 /*TURISMO*/

  goToQr(item){
    
    this.togglePopupMenu();

    const options = {
      preferFrontCamera: false, // iOS and Android
      showFlipCameraButton: true, // iOS and Android
      showTorchButton: true, // iOS and Android
      torchOn: false, // Android, launch with the torch switched on (if available)
      prompt: 'Place a barcode inside the scan area', // Android
        // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      resultDisplayDuration: 500,
      formats: 'QR_CODE,PDF_417', // default: all but PDF_417 and RSS_EXPANDED
        // Android only (portrait|landscape), default unset so it rotates with the device
      orientation: 'portrait',
      disableAnimations: true, // iOS
      disableSuccessBeep: false // iOS
    };

    this.barcodeScanner
            .scan(options)
            .then((data) => {
              this.barcodeData = data;
              const alert = this.alertCtrl.create({
                title: 'Scan Results',
                subTitle: data.text,
                buttons: ['OK']
              });
              alert.present();
            })
            .catch((err) => {
              const alert = this.alertCtrl.create({
                title: 'Attention!',
                subTitle: err,
                buttons: ['Close']
              });
              alert.present();
            });
  }

  goToAtractivos() {
    //alert('Atractivos.');
    //this.togglePopupMenu();
    //this.mapsCtrl.create().then(() => this.mapsCtrl.centerToGeolocation());

  }

  goToActividades() {
    alert('Actividades.');
    this.togglePopupMenu();
  }

  goToServicios() {
    alert('Servicios.');
    this.togglePopupMenu();
  }
/*cultura*/ 
  goToRev(){

    alert();
    this.togglePopupMenu();

  }


  /*mapa

  ionViewDidLoad() {
    console.log('ingreso mapa');
    this.platform.ready().then(() => {
      let element = this.mapElement.nativeElement;
      this.map = this.googleMaps.create(element);
 
      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        let options = {
          target: this.location,
          zoom: 8
        };
 
        this.map.moveCamera(options);
        setTimeout(() => {this.addMarker()}, 2000);
      });
    });
  }
 
  addMarker() {
    this.map.addMarker({
      title: 'My Marker',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: this.location.lat,
        lng: this.location.lng
      }
    })
    .then(marker => {
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        alert('Marker Clicked');
      });
    });
  }*/ 

}
