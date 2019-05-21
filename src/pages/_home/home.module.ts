import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


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

  providers: [
    BarcodeScanner,
   
    
]


 

  

})

export class HomePageModule { }
