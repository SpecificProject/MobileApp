/** Angular Imports */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';

/**
 * Organization service.
 */
@Injectable({
  providedIn: 'root'
})
export class LeaveManagementService {

      constructor(private http: HttpClient) { }
    
    
   getTemplateDetails(): Observable<any> {
   const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams();
        const params = { params: httpParams, headers: headers };
        return this.http.get('https://localhost:8443/fineract-provider/api/v1/leavedetails/template',params);    
    }
    
  getStaffAvaliableLeave(staffId:string): Observable<any> {
   const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams()
        const params = { params: httpParams, headers: headers };
        return this.http.get(`https://localhost:8443/fineract-provider/api/v1/leavedetails/avaliable/${staffId}`,params);    
    }
    
     createLeaveDetails(leaveDetailsData: any): Observable<any> {
     const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams();
        const params = { params: httpParams, headers: headers };
    return this.http.post('https://localhost:8443/fineract-provider/api/v1/leavedetails/leavemanagementdetails', leaveDetailsData,params);
  } 
  
    updateLeaveDetails(leavedetailsId:string,leaveDetailsData: any): Observable<any> {
     const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams();
        const params = { params: httpParams, headers: headers };
    return this.http.put(`https://localhost:8443/fineract-provider/api/v1/leavedetails/leavemanagementdetails/${leavedetailsId}`, leaveDetailsData,params);
  } 
    
    getLeaveDetails(leavedetailsId:string): Observable<any> {
    const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams();
        const params = { params: httpParams, headers: headers };
        return this.http.get(`https://localhost:8443/fineract-provider/api/v1/leavedetails/leavemanagementdetails/${leavedetailsId}`, params);    
    }
  
   getStaffLeaveDetails(staffId:string): Observable<any> {
    const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams()
        .set('staffId',staffId);
        const params = { params: httpParams, headers: headers };
        return this.http.get('https://localhost:8443/fineract-provider/api/v1/leavedetails/leavemanagementdetails', params);    
    }
      
    createAcademicManagement(academicData: any): Observable<any> {
    return this.http.post('/academicyearmanagement', academicData);
  } 
  
}

