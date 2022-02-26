import { Component, OnInit ,ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ExamService } from '../exam.service';


@Component({
  selector: 'app-editexammarksdetails',
  templateUrl: './editexammarksdetails.component.html',
  styleUrls: ['./editexammarksdetails.component.scss']
})
export class EditExamMarksdetailsComponent implements OnInit {

  /** Office form. */
  officeForm: FormGroup;
  /** Office Data */
  officeData: any;
  courseTypeData : any;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();
  files: any[] = [];
  studentDataDetails:any;
  
  data: any = `<p>Hello, world!</p>`;
  
    constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private datePipe: DatePipe,
              private examService:ExamService) {
               this.route.data.subscribe(( data: { studentDataDetails: any }) => {
               this.studentDataDetails = data.studentDataDetails;
               
               });
               }

  ngOnInit() {
 
  this.createofficeForm();
  this.courseTypeData =[{'id':1,'name':'hhghh'},{'id':2,'name':'ggffdds'}];
 
   
  }
 
  
  /**
   * Creates the Office Form
   */
  createofficeForm() {
    this.officeForm = this.formBuilder.group({
      'isOnline':['']
    });
  }

 
 
  submit() {
      var values = JSON.parse(localStorage.getItem('currentUser'));
  
  
     //this.router.navigate(['../1'], {relativeTo: this.route})
     const exammarksdetails = this.studentDataDetails;
     exammarksdetails.number = this.studentDataDetails.markobtained;
    this.examService.updateDiaryManagement(this.studentDataDetails.id,exammarksdetails).subscribe(response => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
    
  }


}
