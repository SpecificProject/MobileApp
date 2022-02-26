import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common'
import { LeaveManagementService } from '../leavemanagement.service';

@Component({
  selector: 'leavemanagement-page',
  templateUrl: 'createleavemanagement.page.html',
  styleUrls: ['createleavemanagement.page.scss']
})
export class CreateLeaveManagement implements OnInit {
  myControl = new FormControl();
  createleavemanagementForm: FormGroup;
  leaveTypeData : any;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();
  avaliableleavedetails:any;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private leaveManagementService :LeaveManagementService,
              private datePipe:DatePipe) {
              this.route.data.subscribe(( data: { leavedetailsTemplate: any ,avaliableleavedetails:any }) => {
              this.leaveTypeData = data.leavedetailsTemplate.typeOptions;
              this.avaliableleavedetails = data.avaliableleavedetails;
     });
   }
   
   ngOnInit() {
   this.createleavemanagementFormDetails();
   }
              
   createleavemanagementFormDetails() {
    this.createleavemanagementForm = this.formBuilder.group({
      'leaveType': ['', Validators.required],
      'fromdate': ['', Validators.required],
      'todate': ['', Validators.required],
    });
  }

  
   submit(){
      
    const dateFormat = 'yyyy-MM-dd';
    
    
    
    this.createleavemanagementForm.patchValue({
      'fromdate': this.datePipe.transform(this.createleavemanagementForm.value.fromdate, dateFormat),
      'todate': this.datePipe.transform(this.createleavemanagementForm.value.todate, dateFormat),
    });
        const leaveDetails = this.createleavemanagementForm.value;
        leaveDetails.dateFormat = dateFormat;
    leaveDetails.locale="en";
    this.leaveManagementService.createLeaveDetails(leaveDetails).subscribe(response => {
      this.router.navigate(['../',response.resourceId], { relativeTo: this.route });
    });
  
   }

}
