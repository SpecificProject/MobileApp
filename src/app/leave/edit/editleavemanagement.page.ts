import { Component ,OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import { DatePipe } from '@angular/common'
import { LeaveManagementService } from '../leavemanagement.service';

@Component({
  selector: 'editleavemanagement-page',
  templateUrl: 'editleavemanagement.page.html',
  styleUrls: ['editleavemanagement.page.scss']
})
export class EditLeaveManagement {
  myControl = new FormControl();
  editleavemanagementForm: FormGroup;
  leaveTypeData : any;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();
 leavedetails :any;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private datePipe:DatePipe,
              private leaveManagementService:LeaveManagementService) {
              this.route.data.subscribe(( data: { leavedetails: any  }) => {
              this.leavedetails = data.leavedetails;
              this.leaveTypeData = data.leavedetails.typeOptions;
          });
     
   }
   
   ngOnInit() {
   this.editleavemanagementFormDetails();
   
   }
              
   editleavemanagementFormDetails() {
    this.editleavemanagementForm = this.formBuilder.group({
      'leaveType': [this.leavedetails.leaveType, Validators.required],
      'fromdate': [this.leavedetails.fromdate && new Date(this.leavedetails.fromdate), Validators.required],
      'todate': [this.leavedetails.todate && new Date(this.leavedetails.todate), Validators.required],
    });
  }

  
   submit(){
    
    
    const dateFormat = 'yyyy-MM-dd';
    
    
    
    this.editleavemanagementForm.patchValue({
      'fromdate': this.datePipe.transform(this.editleavemanagementForm.value.fromdate, dateFormat),
      'todate': this.datePipe.transform(this.editleavemanagementForm.value.todate, dateFormat),
    });
    const leaveDetails = this.editleavemanagementForm.value;
    leaveDetails.dateFormat = dateFormat;
    leaveDetails.locale = "en";
    
    this.leaveManagementService.updateLeaveDetails(this.leavedetails.id,leaveDetails).subscribe(response => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
 
   }

}
