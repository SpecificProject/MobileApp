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
export class AttendenceService implements OnInit{
  url:any;
  headers:any;
  constructor(private http: HttpClient) {
   }
  
  ngOnInit() {
   
  }
    
  getTemplateDetails(officeId:string): Observable<any> {
   const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams()
        .set('officeId', officeId);
        const params = { params: httpParams, headers: headers };
        return this.http.get('https://localhost:8443/fineract-provider/api/v1/groups',params);    
    }
    
    getGroupStudent(groupId:string): Observable<any> {
   const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams()
                .set('associations', 'activeClientMembers');
        
        const params = { params: httpParams, headers: headers };
        return this.http.get(`https://localhost:8443/fineract-provider/api/v1/groups/${groupId}`,params);    
    }
    
    
    createAttendence(attendenceData: any): Observable<any> {
     const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams();
        const params = { params: httpParams, headers: headers };
    return this.http.post('https://localhost:8443/fineract-provider/api/v1/attendence', attendenceData,params);
  } 
  
  updateAttendence(attendenceId:string,attendenceData: any): Observable<any> {
     const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams();
        const params = { params: httpParams, headers: headers };
    return this.http.put(`https://localhost:8443/fineract-provider/api/v1/attendence/${attendenceId}`, attendenceData,params);
  } 
   
   getGroupAttendenceDetails(sectionId:string): Observable<any> {
   const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams()
                .set('sectionId', sectionId);
        
        const params = { params: httpParams, headers: headers };
        return this.http.get('https://localhost:8443/fineract-provider/api/v1/attendence',params);    
    }
    
   getGroupAttendence(attendenceId:string,sectionId:string): Observable<any> {
   const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams()
        .set('sectionId',sectionId);
        
        const params = { params: httpParams, headers: headers };
        return this.http.get(`https://localhost:8443/fineract-provider/api/v1/attendence/${attendenceId}`,params);    
    }
    
    getStudentGroupAttendenceDetails(sectionId:string,studentId:string,fromdate:string,toDate:string): Observable<any> {
   const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams()
                .set('sectionId', sectionId)
                .set('studentId', studentId)
                .set('fromDate', fromdate)
                .set('toDate', toDate);
        
        const params = { params: httpParams, headers: headers };
        return this.http.get('https://localhost:8443/fineract-provider/api/v1/attendence',params);    
    }
}

