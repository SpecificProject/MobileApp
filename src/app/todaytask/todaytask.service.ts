/** Angular Imports */
import { Injectable,OnInit,ViewChild} from '@angular/core';
import { HttpClient, HttpParams ,HttpHeaders} from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';

/**
 * Organization service.
 */
@Injectable({
  providedIn: 'root'
})
export class TodayTaskService implements OnInit{
  url:any;
  headers:any;
  constructor(private http: HttpClient) {
   }
  
  ngOnInit() {
   this.url='https://localhost:8443/fineract-provider/api/v1/academicyearmanagement';
   this.headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
  }
    
  getAcademicManagementDetails(SectionId:string,staffId:string,dayId:string): Observable<any> {
   const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
       var values = JSON.parse(localStorage.getItem('user'));
       const userId = values.staffId;
      let httpParams = new HttpParams()
        .set('SectionId', SectionId)
        .set('staffId', userId)
        .set('dayId', dayId);
        const params = { params: httpParams, headers: headers };
        const url='https://localhost:8443/fineract-provider/api/v1/academicyearmanagement';
        return this.http.get('https://localhost:8443/fineract-provider/api/v1/academicyearmanagement',params);  
          
    }
    createAcademicManagement(academicData: any): Observable<any> {
    return this.http.post('/academicyearmanagement', academicData);
  } 
   
}

