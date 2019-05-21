import { NativeGoogleMapsProvider } from '../../../providers/native-google-maps/native-google-maps';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

declare var google:any;

@IonicPage()
@Component({
  selector: 'page-native-google-maps',
  templateUrl: 'native-google-maps.html',
})
export class NativeGoogleMapsPage {

  @ViewChild('map') 
  mapElement: ElementRef;

  constructor(
    public navCtrl: NavController,
    public mapsCtrl: NativeGoogleMapsProvider) {
  }
  ionViewDidLoad() {
    this.DisplayMap();
  }
 
  DisplayMap() {

    const location = new google.maps.LatLng(17.385044,
      78.486671);

    const options = {
      center:location,
      zoom:10,
      streetViewControl:false,
      mapTypeId:'hybrid'
    };

    const map = new google.maps.Map(this.mapElement.nativeElement,options);

    this.addMarker(location,map);
  }

  addMarker(position,map) {
    return new google.maps.Marker({
      position,
      map
    });
  }
}
