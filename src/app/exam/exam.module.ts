import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { ExamComponent } from './exam.component';
import { CreateExamDetailsComponent } from './create/createexammarksdetails.component';
import { EditExamMarksdetailsComponent } from './edit/editexammarksdetails.component';
import { ViewExamMarksDetail } from './view/viewexammarksdetail.component';
import { ViewExamMarksDetails } from './view/viewexammarksdetails.component';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe } from '@angular/common';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { ExamMarksDetail } from './common-resolver/exammarksdetail.resolver';
import { ExamMarksDetails } from './common-resolver/exammarksdetails.resolver';
import { ViewExamMarkDetails } from './common-resolver/viewexammarkdetails.resolver';

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
            component: ExamComponent 
          },
         {
            path: 'create',
            component: CreateExamDetailsComponent,
             resolve: {
                examtemplate: ExamMarksDetail
          } 
         },
         {
            path: 'viewexammarksdetails',
            component: ViewExamMarksDetails, 
             resolve: {
                examtemplate: ExamMarksDetail
          }
         },
         {
          path: ':id/:sectionId/:examId/:subjectId',
          children: [
          {
            path: '',
            component: ViewExamMarksDetail, 
            resolve: {
                exammarksdetails: ViewExamMarkDetails
             } 
          },
          {
            path: ':exammarkId/edit',
            component: EditExamMarksdetailsComponent ,
            resolve: {
                studentDataDetails: ExamMarksDetails
                
             } 
          }
        ]  
        }
     ]
    }
    ])
  ],
  declarations: [ExamComponent,CreateExamDetailsComponent,EditExamMarksdetailsComponent,ViewExamMarksDetail,ViewExamMarksDetails],
    providers: [ExamMarksDetail,ExamMarksDetails,ViewExamMarkDetails,DatePipe]
  
})
export class ExameMarksDetailsModule {}
  