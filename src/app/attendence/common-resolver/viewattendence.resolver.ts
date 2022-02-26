/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { AttendenceService } from '../attendence.service';

/**
 * Office data resolver.
 */
@Injectable()
export class ViewAttendenceResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private attendenceService: AttendenceService) {}

  /**
   * Returns the office data.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
     const sectionId = route.paramMap.get('id');
    return this.attendenceService.getGroupAttendenceDetails(sectionId);
  }

}
