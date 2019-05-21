import { Component,ViewChild,ElementRef} from '@angular/core';
import { IonicPage, NavController,AlertController,} from 'ionic-angular';
import { BarcodeScanner} from '@ionic-native/barcode-scanner';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  openMenu = false;
  openMenu2 = false;

  products: any[] = [];
  selectedProduct: any;
  productFound:boolean = false;

 


  constructor(public navCtrl: NavController,
    public barcodeScanner: BarcodeScanner,
    public alertCtrl: AlertController,) 
    {
   }
   
   @ViewChild('player') player;
   
   private mapElement:ElementRef;


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
  }

  goToActividades() {
    this.navCtrl.push("AccordionListPage");
  }

  goToServicios() {
    //alert('Servicios.');
   // this.togglePopupMenu();
   this.navCtrl.push("CardImagePage");
  }
/*cultura*/ 
  goToRev(){

    alert();
    this.togglePopupMenu();

  }


 

  ionViewDidLoad() {
    console.log('ingreso mapa');
   
  }
 


}
