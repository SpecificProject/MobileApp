import { Component,Input,OnInit } from '@angular/core';  
import { AlertController } from '@ionic/angular';  
  
@Component({  
  selector: 'alert-page',  
  templateUrl: 'alert.page.html',  
  styleUrls: ['alert.page.scss'],  
})  
export class AlertPage  implements OnInit {  
  constructor(public alertCtrl: AlertController) {
   }  
    @Input() alertmessage: any;
  
  async showAlert() {  
    const alert = await this.alertCtrl.create({  
      header: 'Alert',  
      subHeader: 'SubTitle',  
      message: this.alertmessage,  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }
  ngOnInit() {
    this.showAlertMessage();
  }  
  
  showAlertMessage(){
    this.showAlert();
  } 
}  