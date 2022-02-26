/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { PaymentService } from '../payments.service';

/**
 * Office data resolver.
 */
@Injectable()
export class PaymentResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private paymentService: PaymentService) {}

  /**
   * Returns the office data.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
     var values = JSON.parse(localStorage.getItem('user'));
     const staffId = values.staffId; 
     return this.paymentService.getpaymentDetails(staffId);
  }

}
