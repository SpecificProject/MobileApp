/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganasationService } from '../organasationcourse.service';

/**
 * Office Datatable data resolver.
 */
@Injectable()
export class OrganasationCourses implements Resolve<Object> {

  /**
   * @param {OrganizationService} OrganizationService Organization service.
   */
  constructor(private organasationService: OrganasationService) { }

  /**
   * Returns the Office's Datatable data.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.organasationService.getTemplateDetails();
  }

}
