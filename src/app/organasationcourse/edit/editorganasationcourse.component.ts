import { Component, OnInit ,ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { OrganasationService } from '../organasationcourse.service';


@Component({
  selector: 'app-editonlineorganasationcourse',
  templateUrl: './editorganasationcourse.component.html',
  styleUrls: ['./editorganasationcourse.component.scss']
})
export class EditOnlineOrganasationCourseComponent implements OnInit {

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
  schoolData:any;
  classData:any;
  sectionData:any;
  periodData:any;
  subjectData:any;
  organasationCourse :any;
  data: any = `<p>Hello, world!</p>`;
  
    constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private datePipe: DatePipe,
              private organasationService:OrganasationService) {
               this.route.data.subscribe(( data: { organasationCourse: any ,organasationtemplate:any }) => {
               this.organasationCourse = data.organasationCourse;
               this.schoolData = data.organasationCourse.schoolData;
               console.log(this.schoolData);
               this.periodData = data.organasationtemplate.periodData;
               this.subjectData = data.organasationtemplate.subjectData;
               this.classData=data.organasationCourse.classData;
               this.sectionData=data.organasationCourse.sectionData;
               });
               }

  ngOnInit() {
 
  this.createofficeForm();
  this.courseTypeData =[{'id':1,'name':'hhghh'},{'id':2,'name':'ggffdds'}];
  this.setClassTypeData();
  this.setSectionTypeData();
 
  
   
  }
 
  
  /**
   * Creates the Office Form
   */
  createofficeForm() {
    this.officeForm = this.formBuilder.group({
      'schoolId': [this.organasationCourse.schoolId, Validators.required],
      'classId': [this.organasationCourse.classId, Validators.required],
      'sectionId': [this.organasationCourse.sectionId, Validators.required],
      'subjectId': [this.organasationCourse.subjectId, Validators.required],
      'periodId': [this.organasationCourse.periodId, Validators.required],
      'lecturedate': [this.organasationCourse.courseDate && new Date(this.organasationCourse.courseDate), Validators.required],
      'isOnline':[''],
      'url':[this.organasationCourse.courseUrl]
    });
  }

 
 setClassTypeData() {
    this.officeForm.get('schoolId').valueChanges.subscribe((schoolId: string) => {
      this.classData = [];
      this.organasationService.getClass(schoolId).subscribe((classData: any) => {
        this.classData = classData;
      });
    });
  }
  
  setSectionTypeData() {
    this.officeForm.get('classId').valueChanges.subscribe((classId: string) => {
      this.sectionData = [];
      this.organasationService.getSection(classId).subscribe((sectionData: any) => {
        this.sectionData = sectionData;
      });
    });
  }
  
  /**
   * Submits the office form and creates office.
   * if successful redirects to offices
   */
   

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  submit() {
      var values = JSON.parse(localStorage.getItem('currentUser'));
  
  
     //this.router.navigate(['../1'], {relativeTo: this.route})
     const organasationcourse = this.officeForm.value;
     organasationcourse.userId=values.id;
     organasationcourse.isOnline = true;
    this.organasationService.updateOrganasationCourse(this.organasationCourse.id,organasationcourse).subscribe(response => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
    
  }


}
