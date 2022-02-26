import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AttendenceService } from '../attendence.service';

@Component({
  selector: 'viewattendencedetails-page',
  templateUrl: 'viewattendencedetails.page.html',
  styleUrls: ['viewattendencedetails.page.scss']
})
export class ViewAttendenceDetails {
  
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
   } 
   submit(){
   }
 
}
