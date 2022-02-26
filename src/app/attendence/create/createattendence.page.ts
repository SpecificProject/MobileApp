import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AttendenceService } from '../attendence.service';

@Component({
  selector: 'attendence-page',
  templateUrl: 'createattendence.page.html',
  styleUrls: ['createattendence.page.scss']
})
export class CreateAttendence implements OnInit {
   attendencemanagementForm: FormGroup;
   minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  sectionData:any;
  studentData:any;
  studentDataDetails:any;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private attendenceService:AttendenceService) {
              this.route.data.subscribe(( data: { attendencedetails: any }) => {
              this.sectionData = data.attendencedetails;
               });
              }
              
    
    
  ngOnInit() {
   this.createattendenceForm();
   this.setSectionStudentData();
   
   }          
    createattendenceForm() {
    this.attendencemanagementForm = this.formBuilder.group({
      'sectionId': ['', Validators.required]
    });
  }
  
  setSectionStudentData() {
    this.attendencemanagementForm.get('sectionId').valueChanges.subscribe((sectionId: string) => {
      this.studentData = [];
      this.studentDataDetails = [];
      this.attendenceService.getGroupStudent(sectionId).subscribe((groupdata: any) => {
        this.studentData = groupdata.activeClientMembers;
         for(var i=0;i<this.studentData.length;i++){
               var student ={'id':'','displayName':'','attendence':''};
         
             student.id=this.studentData[i].id;
             student.attendence= '0';
             student.displayName = this.studentData[i].displayName;
                 console.log(student);
             
             this.studentDataDetails.push(student);
         } 
      });
    });
    console.log(this.studentDataDetails);
  }
   submit(){
          console.log(this.studentDataDetails);
          const attendence = this.attendencemanagementForm.value;
          attendence.studentDetails = this.studentDataDetails;
          const sectionId = attendence.sectionId; 
          this.attendenceService.createAttendence(attendence).subscribe(response => {
          this.router.navigate(['../', this.attendencemanagementForm.value.sectionId], { relativeTo: this.route });
       });
   }           

}
