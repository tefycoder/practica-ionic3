import { SharedModule } from './shared.module';
import { forwardRef,NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { MODULES, PROVIDERS } from './app.imports';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RestProvider } from '../providers/rest/rest';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGoogleMapsProvider} from '../providers/native-google-maps/native-google-maps';

@NgModule({
  declarations: [
    // App Core
    MyApp,
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp),
    SharedModule,
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [PROVIDERS,

    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NativeGoogleMapsProvider,
    RestProvider 
    
  ]
})
export class AppModule { }
