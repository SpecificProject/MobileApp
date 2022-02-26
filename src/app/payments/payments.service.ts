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
export class PaymentService {

      constructor(private http: HttpClient) { }
    
    
     
    getpaymentDetails(staffId:string): Observable<any> {
    const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams();
        const params = { params: httpParams, headers: headers };
        return this.http.get(`https://localhost:8443/fineract-provider/api/v1/staff/pay/${staffId}`, params);    
    }
  
    createAcademicManagement(academicData: any): Observable<any> {
    return this.http.post('/academicyearmanagement', academicData);
  } 
  
}

