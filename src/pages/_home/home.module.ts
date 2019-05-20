import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//import { GoogleMaps } from '@ionic-native/google-maps';


/*interaccion */


@NgModule({
  declarations: [
    HomePage,
   

  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    
    
  ],
  exports: [
    HomePage,
    
  ],
 

  

})

export class HomePageModule { }
