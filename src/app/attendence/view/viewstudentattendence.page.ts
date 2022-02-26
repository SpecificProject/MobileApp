import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AttendenceService } from '../attendence.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'viewstudentattendence-page',
  templateUrl: 'viewstudentattendence.page.html',
  styleUrls: ['viewstudentattendence.page.scss']
})
export class ViewStudentAttendence implements OnInit {
   attendencemanagementForm: FormGroup;
   minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  sectionData:any;
  studentData:any;
  studentDataDetails:any;
  alertmessage:any;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private attendenceService:AttendenceService,
              private datePipe:DatePipe) {
              this.route.data.subscribe(( data: { attendencedetails: any }) => {
              this.sectionData = data.attendencedetails;
               });
              }
              
    
    
  ngOnInit() {
   this.createattendenceForm();
   this.setSectionStudentData();
   this.alertmessage='jjjjj';
   }          
    createattendenceForm() {
    this.attendencemanagementForm = this.formBuilder.group({
      'sectionId': ['', Validators.required],
      'studentId': [''],
      'fromDate': ['',Validators.required],
      'toDate': ['',Validators.required]
      
    });
  }
  
  setSectionStudentData() {
    this.attendencemanagementForm.get('sectionId').valueChanges.subscribe((sectionId: string) => {
      this.studentData = [];
      this.attendenceService.getGroupStudent(sectionId).subscribe((groupdata: any) => {
        this.studentData = groupdata.activeClientMembers;
        console.log(this.studentData);
      });
    });
    console.log(this.studentDataDetails);
  }
   submit(){
   
              const dateFormat = 'yyyy-MM-dd';
        this.studentDataDetails=[];  
      this.attendencemanagementForm.patchValue({
      'fromdate': this.datePipe.transform(this.attendencemanagementForm.value.fromdate, dateFormat),
      'todate': this.datePipe.transform(this.attendencemanagementForm.value.todate, dateFormat),
      });
          const attendence = this.attendencemanagementForm.value;
          attendence.studentDetails = this.studentDataDetails;
          const sectionId = attendence.sectionId; 
          const studentId = attendence.studentId; 
          const fromdate =  this.datePipe.transform(attendence.fromDate, dateFormat); 
          const todate = this.datePipe.transform(attendence.toDate, dateFormat); 
          console.log(fromdate);
          
          this.attendenceService.getStudentGroupAttendenceDetails(sectionId,studentId,fromdate,todate).subscribe(response => {
          this.studentDataDetails=response;
         // this.router.navigate(['../', this.attendencemanagementForm.value.sectionId], { relativeTo: this.route });
       });
   }           

}
