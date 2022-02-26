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
  selector: 'app-createexamdetails',
  templateUrl: './createexammarksdetails.component.html',
  styleUrls: ['./createexammarksdetails.component.scss']
})
export class CreateExamDetailsComponent implements OnInit {

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
  examData:any;
  sectionData:any;
  studentData : any;
  studentDataDetails : any;
  examSubjectData : any;
  data: any = `<p>Hello, world!</p>`;
  
    constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private datePipe: DatePipe,
              private examService:ExamService) {
               this.route.data.subscribe(( data: { examtemplate: any }) => {
               this.sectionData = data.examtemplate.sectionDataOptions;
               });
               }

  ngOnInit() {
 
  this.createofficeForm();
  this.courseTypeData =[{'id':1,'name':'hhghh'},{'id':2,'name':'ggffdds'}];
  this.setSectionStudentData();
  this.setExamSubjectData();
 
  
   
  }
 
  
  /**
   * Creates the Office Form
   */
  createofficeForm() {
    this.officeForm = this.formBuilder.group({
      'sectionId': ['', Validators.required],
      'subjectId': ['', Validators.required],
      'examId': ['', Validators.required]
    });
  }

 
 setSectionStudentData() {
    this.officeForm.get('sectionId').valueChanges.subscribe((sectionId: string) => {
      this.studentData = [];
      this.studentDataDetails = [];
      this.examService.getGroupStudent(sectionId).subscribe((groupdata: any) => {
        this.studentData = groupdata.activeClientMembers;
            this.setSectionTypeData(sectionId);
        
         for(var i=0;i<this.studentData.length;i++){
               var student ={'id':'','displayName':'','rollNo':'','number':''};
             student.id=this.studentData[i].id;
             student.rollNo= this.studentData[i].id;
             student.displayName = this.studentData[i].displayName;
             student.number='';
             this.studentDataDetails.push(student);
         } 
      });
    });
    console.log(this.studentDataDetails);
  }
  
  setSectionTypeData(sectionId) {
      this.examData = [];
      this.examService.getExam(sectionId).subscribe((examData: any) => {
        this.examData = examData;
        this.examSubjectData = examData.examsubjectdetails;
      });
  }
  
   setExamSubjectData() {
    this.officeForm.get('examId').valueChanges.subscribe((examId: string) => {
      this.examSubjectData = [];
      this.examService.getExamDetails(examId).subscribe((examdata: any) => {
        this.examSubjectData = examdata.examsubjectdetails;
        
        
      });
    });
    console.log(this.studentDataDetails);
  }
  
 
  submit() {
      var values = JSON.parse(localStorage.getItem('currentUser'));
  
  
     //this.router.navigate(['../1'], {relativeTo: this.route})
     const examMarksdetails = this.officeForm.value;
     examMarksdetails.studentDetails=this.studentDataDetails;
    this.examService.createexammarksdetails(examMarksdetails).subscribe(response => {
      this.router.navigate([`../${examMarksdetails.sectionId}/${examMarksdetails.examId}/${examMarksdetails.subjectId}`,response['resourceId']], { relativeTo: this.route });
    });
    
  }


}
