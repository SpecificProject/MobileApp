import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { DiaryManagementService } from '../diarymanagement.service';

@Component({
  selector: 'diarymanagement-page',
  templateUrl: 'creatediarymanagement.page.html',
  styleUrls: ['creatediarymanagement.page.scss']
})
export class CreateDiaryManagement implements OnInit {
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  diarymanagementForm: FormGroup;
  sectionData:any;
  subjectData : any;
  departmentId:any;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private diaryManagementService: DiaryManagementService) {
              this.route.data.subscribe(( data: { sectiondetails: any }) => {
              this.sectionData = data.sectiondetails;
               });
     
   }
   
   ngOnInit() {
   this.creatediarymanagementForm();
   this.setSectionStudentData();
   
   }
              
   creatediarymanagementForm() {
    this.diarymanagementForm = this.formBuilder.group({
      'sectionId': ['', Validators.required],
      'subjectId': ['', Validators.required],
      'description': ['', Validators.required],
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
          this.diaryManagementService.createDiaryManagement(diarymanagementData).subscribe(response => {
          this.router.navigate(['../','1'],{relativeTo: this.route});
       
       });
   }           

   

}
