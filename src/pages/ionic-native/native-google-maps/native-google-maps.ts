import { NativeGoogleMapsProvider } from '../../../providers/native-google-maps/native-google-maps';
import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';



declare var google:any;

@IonicPage()
@Component({
  selector: 'page-native-google-maps',
  templateUrl: 'native-google-maps.html',
})
export class NativeGoogleMapsPage {

  @ViewChild('map') 
  mapElement: ElementRef;
  map: any;


  constructor(
    public navCtrl: NavController,
    public mapsCtrl: NativeGoogleMapsProvider,
    public geolocation: Geolocation)  {
  }
  ionViewDidLoad() {
    this.loadMap();
  }
 
 


  loadMap() {

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      console.log(err);
    });

  }

  addMarker(){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
  
    let content = "<h4>INFORMACION!</h4>";          
  
    this.addInfoWindow(marker, content);
  
  }
  
  
  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
 
}
