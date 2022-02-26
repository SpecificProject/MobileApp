import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ExamService } from '../exam.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'viewexammarksdetails-page',
  templateUrl: 'viewexammarksdetails.component.html',
  styleUrls: ['viewexammarksdetails.component.scss']
})
export class ViewExamMarksDetails implements OnInit {
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
  exammarksdetails:any;
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
  
 
  
   submit(){
 
          const officeFormValue = this.officeForm.value;
          this.examService.getExammarksdetails(officeFormValue.examId,officeFormValue.sectionId,officeFormValue.subjectId).subscribe(response => {
          this.exammarksdetails=response;
         // this.router.navigate(['../', this.attendencemanagementForm.value.sectionId], { relativeTo: this.route });
       });
       
   }           

}
