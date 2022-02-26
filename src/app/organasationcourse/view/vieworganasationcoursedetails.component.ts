import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { OrganasationService } from '../organasationcourse.service';
import { DatePipe } from '@angular/common'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'vieworganasationcoursedetails-page',
  templateUrl: 'vieworganasationcoursedetails.component.html',
  styleUrls: ['vieworganasationcoursedetails.component.scss']
})
export class ViewOrganasationCourseDetails implements OnInit {
   attendencemanagementForm: FormGroup;
   minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  sectionData:any;
  studentData:any;
  studentCourseDetails:any;
  showvedio=false;
  safeSrc: SafeResourceUrl;
  
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private organasationService:OrganasationService,
              private datePipe:DatePipe,
              private sanitizer: DomSanitizer) {
              this.route.data.subscribe(( data: { sectiondetails: any }) => {
              this.sectionData = data.sectiondetails;
               });
              }
              
    
    
  ngOnInit() {
   this.createattendenceForm();
   }          
    createattendenceForm() {
    this.attendencemanagementForm = this.formBuilder.group({
      'lecturedate': ['', Validators.required]
    });
  }
  
  viewvedio(vediourl){
     this.showvedio=!this.showvedio;
     this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(vediourl);
  }
  
   submit(){
              const dateFormat = 'yyyy-MM-dd';
      this.attendencemanagementForm.patchValue({
      'lecturedate': this.datePipe.transform(this.attendencemanagementForm.value.lecturedate, dateFormat),
      });
          const lecturedata = this.attendencemanagementForm.value;
          lecturedata.lecturedate =  this.datePipe.transform(lecturedata.lecturedate, dateFormat); 
         // const todate = this.datePipe.transform(attendence.toDate, dateFormat); 
          
          this.organasationService.getCourseDetails('1',lecturedata).subscribe(response => {
          this.studentCourseDetails=response.organasationCourseData;
         // this.router.navigate(['../', this.attendencemanagementForm.value.sectionId], { relativeTo: this.route });
       });
   }           

}
