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
export class ExamService {

      constructor(private http: HttpClient) { }
      
        
  getTemplateDetails(): Observable<any> {
   const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams();
        const params = { params: httpParams, headers: headers };
        return this.http.get('https://localhost:8443/fineract-provider/api/v1/exam/template',params);    
    }
   getGroupStudent(sectionId:string): Observable<any> {
   const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams()
                .set('associations', 'activeClientMembers');
        
        const params = { params: httpParams, headers: headers };
        return this.http.get(`https://localhost:8443/fineract-provider/api/v1/groups/${sectionId}`,params);    
    } 
    
   getExam(sectionId:string): Observable<any> {
   const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams()
                .set('sectionId', sectionId);
        
        const params = { params: httpParams, headers: headers };
        return this.http.get('https://localhost:8443/fineract-provider/api/v1/exam',params);    
    } 
    
     getExamDetails(examId:string): Observable<any> {
   const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams();
        
        const params = { params: httpParams, headers: headers };
        return this.http.get(`https://localhost:8443/fineract-provider/api/v1/exam/${examId}`,params);    
    }  
    
  getSectionSubject(sectionId:string): Observable<any> {
   const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams()
        .set('sectionId',sectionId);
        
        const params = { params: httpParams, headers: headers };
        return this.http.get('https://localhost:8443/fineract-provider/api/v1/subjects',params);    
    }
    
     createexammarksdetails(exammarksdetails: any): Observable<any> {
     const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams();
        const params = { params: httpParams, headers: headers };
    return this.http.post('https://localhost:8443/fineract-provider/api/v1/exam/examdetails', exammarksdetails,params);
  } 
    
    getExammarksdetail(examdetailsId:any): Observable<any> {
    const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
     let httpParams = new HttpParams();
         const params = { params: httpParams, headers: headers };
        return this.http.get(`https://localhost:8443/fineract-provider/api/v1/exam/exammarksdetails/exammarks/${examdetailsId}`,params);    
    }
    
    getExammarksdetails(examId:any,sectionId:any,subjectId:any): Observable<any> {
    const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
     let httpParams = new HttpParams()
           .set('SectionId',sectionId)
           .set('subjectId',subjectId);
         const params = { params: httpParams, headers: headers };
        return this.http.get(`https://localhost:8443/fineract-provider/api/v1/exam/exammarksdetails/${examId}`,params);    
    }
    updateDiaryManagement(exammarksdetailsId:string,exammarksdetailsdata: any): Observable<any> {
     const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams();
        const params = { params: httpParams, headers: headers };
    return this.http.put(`https://localhost:8443/fineract-provider/api/v1/exam/examdetails/${exammarksdetailsId}`, exammarksdetailsdata,params);
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
    return this.http.get('https://localhost:8443/fineract-provider/api/v1/diarymanagement', params);
  } 
  
  getClass(officeId:string):Observable<any> {
     const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams()
                 .set('officeId',officeId);
                 
        const params = { params: httpParams, headers: headers };
    return this.http.get('https://localhost:8443/fineract-provider/api/v1/diarymanagement', params);
  } 
  
  getSection(officeId:string):Observable<any> {
     const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams()
                 .set('officeId',officeId);
                 
        const params = { params: httpParams, headers: headers };
    return this.http.get('https://localhost:8443/fineract-provider/api/v1/diarymanagement', params);
  } 
    
    createAcademicManagement(academicData: any): Observable<any> {
    return this.http.post('/academicyearmanagement', academicData);
  } 
  
}

