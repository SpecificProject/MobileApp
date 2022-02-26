/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ExamService } from '../exam.service';

/**
 * Office and template data resolver.
 */
@Injectable()
export class ViewExamMarkDetails implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private examService: ExamService) {}

  /**
   * Returns the office and template data.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
   const sectionId = route.paramMap.get('id');
   const examId = route.paramMap.get('sectionId');
   const subjectId = route.paramMap.get('examId');
    
    console.log(route.paramMap);
    return this.examService.getExammarksdetails(examId,sectionId,subjectId);
  }

}
