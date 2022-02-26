/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganasationService } from '../organasationcourse.service';

/**
 * Office and template data resolver.
 */
@Injectable()
export class ViewOrganasationCourseResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private organasationService: OrganasationService) {}

  /**
   * Returns the office and template data.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const organasationcourseId = route.paramMap.get('id');
    return this.organasationService.getOrganasationCourse(organasationcourseId);
  }

}
