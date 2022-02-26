import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { DiaryManagementService } from '../diarymanagement.service';


@Component({
  selector: 'diarymanagement-page',
  templateUrl: 'editdiarymanagement.page.html',
  styleUrls: ['editdiarymanagement.page.scss']
})
export class EditDiaryManagement {
   myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  diarymanagementForm: FormGroup;
  sectionData:any;
  subjectData : any;
  departmentId:any;
  diarymanagementdata:any;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private diaryManagementService:DiaryManagementService,
              private formBuilder:FormBuilder) {
              this.route.data.subscribe(( data: { sectiondetails: any ,diarymanagementdata:any}) => {
              this.sectionData = data.sectiondetails;
              this.diarymanagementdata = data.diarymanagementdata;
               });
              }
  
  
  
   ngOnInit() {
   this.editdiarymanagementForm();
   this.setSectionStudentData();
   
   }
              
   editdiarymanagementForm() {
    this.diarymanagementForm = this.formBuilder.group({
      'sectionId': [this.diarymanagementdata.sectionId, Validators.required],
      'subjectId': [this.diarymanagementdata.subjectId, Validators.required],
      'description': [this.diarymanagementdata.description, Validators.required],
    });
  }
  setSectionStudentData() {
    this.diarymanagementForm.get('sectionId').valueChanges.subscribe((sectionId: string) => {
      this.subjectData = [];
      this.diaryManagementService.getSectionSubject(sectionId).subscribe((subjectData: any) => {
        this.subjectData = subjectData;
      });
    });
  }
   submit(){
          const diarymanagementData = this.diarymanagementForm.value;
          const sectionId = diarymanagementData.sectionId; 
          this.diaryManagementService.updateDiaryManagement(this.diarymanagementdata.id,diarymanagementData).subscribe(response => {
          this.router.navigate(['../../',response.resourceId],{relativeTo: this.route});
       
       });
   }           

   
  
  

}
