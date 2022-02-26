import { Component ,OnInit} from '@angular/core';
import { AlertService } from '../alert/alert.service';
import { HttpClient, HttpParams ,HttpHeaders} from '@angular/common/http';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen'

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
     loginform: FormGroup;
  
  shownavigationstabs:boolean=false;
  username :string;
  password :string;
  
  constructor(private alertService: AlertService,
  private http: HttpClient,
  private router: Router,
  private route: ActivatedRoute,
  private formBuilder: FormBuilder){
          
  }
  
  ngOnInit() {
   this.createloginForm();
   
   } 
    createloginForm() {
    this.loginform = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
      
    });
  }
 
 login(){
       const userName = this.loginform.value.username;
       const password = this.loginform.value.password;
       this.alertService.alert({ type: 'Authentication Start', message: 'Please wait...' });
                    this.shownavigationstabs = true;
       const user={'username':'','password':''};
       user.username='mifos';
       user.password='password';             
       const headers = new HttpHeaders()
                       .set('Fineract-Platform-TenantId', 'default')
                       .set('Content-Type', 'application/json');
                       alert('updated User');
       this.http.post<any>('https://demo.mifos.io/fineract-provider/api/v1/authentication',user, {headers: headers})
       .pipe(catchError(err => {
      alert(JSON.stringify(err));
      return null;
      })).subscribe(user => {
            localStorage.setItem('user', JSON.stringify(user));
             this.shownavigationstabs = true;
      })
  }
  logout(){
                     this.shownavigationstabs = false;
        
        this.router.navigate(['../tabs/tab1']);
        }
  
}
