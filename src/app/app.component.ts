import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen'
import {Router ,ActivatedRoute} from '@angular/router';
import { IonRouterOutlet, Platform ,AlertController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private router:Router ,private route:ActivatedRoute,
  private platform: Platform ,
  public alertController: AlertController ) {
      this.initializeApp();
  }

  initializeApp() {
    /* To make sure we provide the fastest app loading experience
       for our users, hide the splash screen automatically
       when the app is ready to be used:

        https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
    */   
            SplashScreen.hide();
            this.navigate('')
    }
  
 
  
  navigate(navigatepage){
   if(navigatepage=='payments'){
      this.router.navigate(['/tabs/payments'], {relativeTo: this.route});
   }
   else if(navigatepage=='leave'){
      this.router.navigate(['/tabs/leave'], {relativeTo: this.route});
   }
   else if(navigatepage=='attendence'){
      this.router.navigate(['/tabs/attendence'], {relativeTo: this.route});   
   }
   else if(navigatepage=='metting'){
      this.router.navigate(['/tabs/metting'], {relativeTo: this.route});
   }
   else if(navigatepage=='diarymanagement'){
          this.router.navigate(['/tabs/diarymanagement'], {relativeTo: this.route});
   }
   else if(navigatepage=='todaytask'){
        this.router.navigate(['/tabs/todaytask'], {relativeTo: this.route});
   }
   else if(navigatepage=='holiday'){
        this.router.navigate(['/tabs/holiday'], {relativeTo: this.route});
   }
   else if(navigatepage=='onlineclass'){
        this.router.navigate(['/tabs/onlineclass'], {relativeTo: this.route});
   }
   else if(navigatepage=='uploadcourse'){
        this.router.navigate(['/tabs/organasationcourse'], {relativeTo: this.route});
   }
   else if(navigatepage=='addexammarks'){
        this.router.navigate(['/tabs/exammarksdetails'], {relativeTo: this.route});
   }
    else {

         this.router.navigate(['/tabs/tab1']);
   }
   
  }
}
