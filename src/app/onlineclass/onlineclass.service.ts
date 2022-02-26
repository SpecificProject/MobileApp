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
export class OnlineClassService {

      constructor(private http: HttpClient) { }
    
    
     
    getonlineClass(staffId:string): Observable<any> {
     const headerdata = new HttpHeaders()
                  .set('Content-Type', 'application/json');
          const url='http://192.168.1.100:8080/api/organasationcourse/usercourse/'+staffId;
          const options = { headers: headerdata };
        return this.http.get(url);    
    }
  
    createAcademicManagement(academicData: any): Observable<any> {
    return this.http.post('/academicyearmanagement', academicData);
  } 
  
}

