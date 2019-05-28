import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeGoogleMapsPage } from './native-google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGoogleMapsProvider } from '../../../providers/native-google-maps/native-google-maps';

@NgModule({
  declarations: [
    NativeGoogleMapsPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeGoogleMapsPage),
    BrowserModule,


  ],
  providers: [
   
    Geolocation,
   
    NativeGoogleMapsProvider
  ]
  
})
export class NativeGoogleMapsPageModule {}
