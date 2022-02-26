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
export class DiaryManagementService {

      constructor(private http: HttpClient) { }
      
        
  getTemplateDetails(officeId:string): Observable<any> {
   const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams()
        .set('officeId', officeId);
        const params = { params: httpParams, headers: headers };
        return this.http.get('https://demo.mifos.io/fineract-provider/api/v1/groups',params);    
    }
    
  getSectionSubject(sectionId:string): Observable<any> {
   const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams()
        .set('sectionId',sectionId);
        
        const params = { params: httpParams, headers: headers };
        return this.http.get('https://demo.mifos.io/fineract-provider/api/v1/subjects',params);    
    }
    
     createDiaryManagement(diarymanagementdata: any): Observable<any> {
     const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams();
        const params = { params: httpParams, headers: headers };
    return this.http.post('https://demo.mifos.io/fineract-provider/api/v1/diarymanagement', diarymanagementdata,params);
  } 
    
    getDiaryManagement(diarymanagementId:any): Observable<any> {
    const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
     let httpParams = new HttpParams();
         const params = { params: httpParams, headers: headers };
        return this.http.get(`https://demo.mifos.io/fineract-provider/api/v1/diarymanagement/${diarymanagementId}`,params);    
    }
    updateDiaryManagement(diarymanagementId:string,diarymanagementdataData: any): Observable<any> {
     const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams();
        const params = { params: httpParams, headers: headers };
    return this.http.put(`https://demo.mifos.io/fineract-provider/api/v1/diarymanagement/${diarymanagementId}`, diarymanagementdataData,params);
  } 
  getStudentDiaryeDetails(sectionId:string,fromdate:string,todate:string):Observable<any> {
     const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams()
                 .set('sectionId',sectionId)
                 .set('fromdate',fromdate)
                 .set('todate',todate);
                 
        const params = { params: httpParams, headers: headers };
    return this.http.get('https://demo.mifos.io/fineract-provider/api/v1/diarymanagement', params);
  } 
    
    createAcademicManagement(academicData: any): Observable<any> {
    return this.http.post('/academicyearmanagement', academicData);
  } 
  
}

