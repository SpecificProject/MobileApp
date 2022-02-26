/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ExamService } from '../exam.service';

/**
 * Office Datatable data resolver.
 */
@Injectable()
export class ExamMarksDetails implements Resolve<Object> {

  /**
   * @param {OrganizationService} OrganizationService Organization service.
   */
  constructor(private examService: ExamService) { }

  /**
   * Returns the Office's Datatable data.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
  const id =route.paramMap.get('exammarkId');
    return this.examService.getExammarksdetail(id);
  }

}
