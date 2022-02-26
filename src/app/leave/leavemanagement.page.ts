import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'leavemanagement-page',
  templateUrl: 'leavemanagement.page.html',
  styleUrls: ['leavemanagement.page.scss']
})
export class LeaveManagement {

  constructor(private router:Router ,private route:ActivatedRoute) {}
  /*
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private datePipe: DatePipe,
              private router: Router,
              private groupsService: GroupsService,
              public dialog: MatDialog) {
    this.route.data.subscribe(( data: {academicDetailsData : any}) => {
    this.mondayData = data.academicDetailsData.mondayData;
    this.tuesdayData = data.academicDetailsData.tuesdayData;
    this.wesdnayData = data.academicDetailsData.wedsneydayData;
    this.thursdayData = data.academicDetailsData.thursdayData;
    this.fridayData = data.academicDetailsData.fridayData;
    this.saturdayData = data.academicDetailsData.saturdayData
     
    });
  }
*/
  applyleave(){
         this.router.navigate(['create'], {relativeTo: this.route});
  }
  viewleave(){
         this.router.navigate(['viewleave'], {relativeTo: this.route});
  }
}
