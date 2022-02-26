import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { DiaryManagement } from './diarymanagement.page';
import { CreateDiaryManagement } from './create/creatediarymanagement.page';
import { EditDiaryManagement } from './edit/editdiarymanagement.page';
import { ViewDiaryManagement } from './view/viewdiarymanagement.page';
import { ViewStudentDiaryManagement } from './view/viewstudentdiarymanagement.page';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe } from '@angular/common';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { CreateDiaryManagementResolver } from './common-resolver/creatediarymanagement.resolver';
import { DiaryManagementResolver } from './common-resolver/diarymanagement.resolver';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule.forChild([
    { path: '', 
     children: [
          {
            path: '',
            component: DiaryManagement 
          },
         {
            path: 'create',
            component: CreateDiaryManagement,
             resolve: {
                sectiondetails: CreateDiaryManagementResolver
          } 
         },
         {
            path: 'viewdiarymanagement',
            component: ViewStudentDiaryManagement, 
             resolve: {
                sectiondetails: CreateDiaryManagementResolver
          }
         },
         {
          path: ':id',
          children: [
          {
            path: '',
            component: ViewDiaryManagement, 
            resolve: {
                diarymanagementdata: DiaryManagementResolver
             } 
          },
          {
            path: 'edit',
            component: EditDiaryManagement ,
            resolve: {
                diarymanagementdata: DiaryManagementResolver,
                sectiondetails: CreateDiaryManagementResolver
                
             } 
          }
        ]  
        }
     ]
    }
    ])
  ],
  declarations: [DiaryManagement,CreateDiaryManagement,EditDiaryManagement,ViewDiaryManagement,ViewStudentDiaryManagement],
    providers: [CreateDiaryManagementResolver,DiaryManagementResolver,DatePipe]
  
})
export class DiaryManagementModule {}
  