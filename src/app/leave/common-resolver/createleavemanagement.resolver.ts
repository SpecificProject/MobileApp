/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { LeaveManagementService } from '../leavemanagement.service';

/**
 * Office data resolver.
 */
@Injectable()
export class CreateLeaveManagementResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private leaveManagementService: LeaveManagementService) {}

  /**
   * Returns the office data.
   * @returns {Observable<any>}
   */
  
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.leaveManagementService.getTemplateDetails();
  }

}
