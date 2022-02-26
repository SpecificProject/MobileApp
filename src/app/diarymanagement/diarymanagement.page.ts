import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'diarymanagement-page',
  templateUrl: 'diarymanagement.page.html',
  styleUrls: ['diarymanagement.page.scss']
})
export class DiaryManagement {

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
  homework(){
         this.router.navigate(['create'], {relativeTo: this.route});
  }
  viewhomework(){
         this.router.navigate(['viewdiarymanagement'], {relativeTo: this.route});
  }
}
