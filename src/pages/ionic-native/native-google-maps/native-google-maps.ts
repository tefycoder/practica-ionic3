import {NativeGoogleMapsProvider } from '../../../providers/native-google-maps/native-google-maps';
import { Component, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'page-native-google-maps',
  templateUrl: 'native-google-maps.html',
})
export class NativeGoogleMapsPage {

  @ViewChild('map') mapElement: ElementRef;

  constructor(public maps: NativeGoogleMapsProvider ) {
  }

  ionViewDidLoad() {
    this.maps.init(this.mapElement.nativeElement, (latLng) => {
      console.log(latLng.lat() + ', ' + latLng.lng());
    }).then(() => {
    });
  }
}
