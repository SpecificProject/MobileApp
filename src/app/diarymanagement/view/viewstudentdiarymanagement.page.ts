import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { DiaryManagementService } from '../diarymanagement.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'viewstudentdiarymanagement-page',
  templateUrl: 'viewstudentdiarymanagement.page.html',
  styleUrls: ['viewstudentdiarymanagement.page.scss']
})
export class ViewStudentDiaryManagement implements OnInit {
   attendencemanagementForm: FormGroup;
   minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  sectionData:any;
  studentData:any;
  studentDiaryDetails:any;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private diaryManagementService:DiaryManagementService,
              private datePipe:DatePipe) {
              this.route.data.subscribe(( data: { sectiondetails: any }) => {
              this.sectionData = data.sectiondetails;
               });
              }
              
    
    
  ngOnInit() {
   this.createattendenceForm();
   }          
    createattendenceForm() {
    this.attendencemanagementForm = this.formBuilder.group({
      'sectionId': ['', Validators.required],
      'fromDate': ['',Validators.required],
      'toDate': ['',Validators.required]
    });
  }
  
   submit(){
              const dateFormat = 'yyyy-MM-dd';
        this.studentDiaryDetails=[];  
      this.attendencemanagementForm.patchValue({
      'fromDate': this.datePipe.transform(this.attendencemanagementForm.value.fromDate, dateFormat),
      'toDate': this.datePipe.transform(this.attendencemanagementForm.value.toDate, dateFormat),
      });
          const attendence = this.attendencemanagementForm.value;
          const sectionId = attendence.sectionId; 
          const fromdate =  this.datePipe.transform(attendence.fromDate, dateFormat); 
          const todate = this.datePipe.transform(attendence.toDate, dateFormat); 
          
          this.diaryManagementService.getStudentDiaryeDetails(sectionId,fromdate,todate).subscribe(response => {
          this.studentDiaryDetails=response;
         // this.router.navigate(['../', this.attendencemanagementForm.value.sectionId], { relativeTo: this.route });
       });
   }           

}
