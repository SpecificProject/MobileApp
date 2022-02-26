/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { DiaryManagementService } from '../diarymanagement.service';

/**
 * Office data resolver.
 */
@Injectable()
export class DiaryManagementResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private diaryManagementService: DiaryManagementService) {}

  /**
   * Returns the office data.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const diarymanagementId = route.paramMap.get('id');
    return this.diaryManagementService.getDiaryManagement(diarymanagementId);
  }

}
