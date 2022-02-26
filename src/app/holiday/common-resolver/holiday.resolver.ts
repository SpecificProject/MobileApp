/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { HoliDayService } from '../holiday.service';

/**
 * Office data resolver.
 */
@Injectable()
export class HolidayResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private holidayService: HoliDayService) {}

  /**
   * Returns the office data.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
     var values = JSON.parse(localStorage.getItem('user'));
     const officeId = values.officeId; 
     return this.holidayService.getHolidayDetails(officeId);
  }

}
