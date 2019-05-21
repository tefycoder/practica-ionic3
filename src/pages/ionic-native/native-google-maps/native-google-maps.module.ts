import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeGoogleMapsPage } from './native-google-maps';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NativeGoogleMapsPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeGoogleMapsPage),
    HttpClientModule,
  ],
  exports: [
    NativeGoogleMapsPage
  ]
})
export class NativeGoogleMapsPageModule {}
