import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AttendenceService } from '../attendence.service';

@Component({
  selector: 'diarymanagement-page',
  templateUrl: 'editattendence.page.html',
  styleUrls: ['editattendence.page.scss']
})
export class EditAttendence {
     editattendencemanagementForm: FormGroup;
  
  attendencedata:any
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private attendenceService:AttendenceService) {
               this.route.data.subscribe(( data: { attendencedetails: any }) => {
               this.attendencedata = data.attendencedetails;
               });
              }
  
   ngOnInit() {
   this.editattendenceForm();
   } 
 
 editattendenceForm() {
    this.editattendencemanagementForm = this.formBuilder.group({
      'sectionId': [this.attendencedata.sectionId, Validators.required]
    });
  }
  
  submit(){
      
         var studentDetails ={'id':'','displayName':'','attendence':''};
         studentDetails.id=this.attendencedata.studentId; 
         studentDetails.displayName = this.attendencedata.studentName;
         studentDetails.attendence = this.attendencedata.attendenceType;
         const attendence = this.editattendencemanagementForm.value;
         attendence.id = this.attendencedata.id;
         attendence.attendenceType = 0;
         if(this.attendencedata.attendenceType){
         attendence.attendenceType=1;
         }
         attendence.studentDetails = studentDetails;
         this.attendenceService.updateAttendence(this.attendencedata.id,attendence).subscribe(response => {
         this.router.navigate(['../../', this.attendencedata.id], { relativeTo: this.route });
       });
   
  }         

}
