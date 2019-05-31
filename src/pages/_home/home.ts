import { Component,ViewChild,ElementRef} from '@angular/core';
import { IonicPage, NavController,AlertController,} from 'ionic-angular';
import { BarcodeScanner} from '@ionic-native/barcode-scanner';
//import { InAppBrowserOriginal } from '@ionic-native/in-app-browser';





@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    //'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg'
  ];

  openMenu = false;
  openMenu2 = false;

  products: any[] = [];
  selectedProduct: any;
  productFound:boolean = false;

 


  constructor(public navCtrl: NavController,
    public barcodeScanner: BarcodeScanner,
    public alertCtrl: AlertController,
    //private iap: InAppBrowserOriginal,
    
    ) 
    {
   }
   
   @ViewChild('player') player;
   
   private mapElement:ElementRef;


  // It's interesting to remove the src and put it back
  // when entering and leaving the page so there are no memory leaks.
  ionViewWillLeave() {
    // the .nativeElement property of the ViewChild is the reference to the tag <video>
   
  }

  ionViewWillEnter() {
  
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

 scan(){
    
  this.selectedProduct = {};
  this.barcodeScanner.scan().then((barcodeData) => {
    this.selectedProduct = this.products.find(product => product.plu === barcodeData.text);
    if(this.selectedProduct !== undefined) {
      this.productFound = true;
      console.log(this.selectedProduct);
    } else {
      this.selectedProduct = {};
      this.productFound = false;
      
          console.log("paso 1");
       
      
    }
  }, (err) => {
    
        console.log("paso 2");
      
    
  });

  }

  goToAtractivos() {
   this.navCtrl.push("NativeGoogleMapsPage");
  // this.iab.push("https://www.ion-book.com/","_blank");

  }

  goToActividades() {
    this.navCtrl.push("TimelinePage");
  }

  goToServicios() {
    //alert('Servicios.');
   // this.togglePopupMenu();
   this.navCtrl.push("CardImagePage");
  }
/*cultura*/
  goToRev(){
    
    this.navCtrl.push("ExpandableHeaderPage");
    alert();
    this.togglePopupMenu();

  }


  openLink(){
    //this.iap.create("http://www.munlima.gob.pe/images/agenda-cultural-mayo.pdf","_blank");
  }

  ionViewDidLoad() {
    console.log('ingreso mapa');
   
  }
 


}
