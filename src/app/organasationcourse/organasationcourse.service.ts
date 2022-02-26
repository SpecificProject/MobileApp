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
export class OrganasationService {

      constructor(private http: HttpClient) { }
      
        
  getTemplateDetails(): Observable<any> {
   const headerdata = new HttpHeaders()
                  .set('Content-Type', 'application/json');
          const url='http://192.168.1.100:8080/api/organasationcourse/template';
          const options = { headers: headerdata };
        return this.http.get(url);    
    }
    
  getSectionSubject(sectionId:string): Observable<any> {
   const headers = new HttpHeaders()
                  .set('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')
                  .set('Fineract-Platform-TenantId', 'default');
        let httpParams = new HttpParams()
        .set('sectionId',sectionId);
        
        const params = { params: httpParams, headers: headers };
        return this.http.get('https://192.168.1.100:8443/fineract-provider/api/v1/subjects',params);    
    }
    
     createOrganasationCourse(organasationcourse: any): Observable<any> {
      const headerdata = new HttpHeaders()
                  .set('Content-Type', 'application/json');
    const url='http://192.168.1.100:8080/api/organasationcourse';
          const options = { headers: headerdata };
       return this.http.post(url, organasationcourse,options);
  } 
    
    getOrganasationCourse(organasationcourseId:any): Observable<any> {
     const headerdata = new HttpHeaders()
                  .set('Content-Type', 'application/json');
      const url='http://192.168.1.100:8080/api/organasationcourse/'+organasationcourseId;
          const options = { headers: headerdata };
       return this.http.get(url);
    }
    
    updateOrganasationCourse(organasationcourseId:string,organasationcourse: any) {
    const headerdata = new HttpHeaders()
                  .set('Content-Type', 'application/json');
    const url='http://192.168.1.100:8080/api/organasationcourse/'+organasationcourseId;
          const options = { headers: headerdata };
       return this.http.put(url, organasationcourse,options);
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
    return this.http.get('https://192.168.1.100:8443/fineract-provider/api/v1/diarymanagement', params);
  } 
  
   getCourseDetails(userId:string,organasationdata:any):Observable<any> {
       const headerdata = new HttpHeaders()
                  .set('Content-Type', 'application/json');
          const url='http://192.168.1.100:8080/api/userprofile/organasationcourse/'+userId;
          const options = { headers: headerdata };
        return this.http.post(url,organasationdata,options);
  } 
  
  getClass(schoolId:string):Observable<any> {
       const headerdata = new HttpHeaders()
                  .set('Content-Type', 'application/json');
          const url='http://192.168.1.100:8080/api/code/configuration/class/'+schoolId;
          const options = { headers: headerdata };
        return this.http.get(url);  
  } 
  
  getSection(classId:string):Observable<any> {
      const headerdata = new HttpHeaders()
                  .set('Content-Type', 'application/json');
          const url='http://192.168.1.100:8080/api/code/configuration/section/'+classId;
          const options = { headers: headerdata };
        return this.http.get(url);    
  } 
    
    createAcademicManagement(academicData: any): Observable<any> {
    return this.http.post('/academicyearmanagement', academicData);
  } 
  
}

