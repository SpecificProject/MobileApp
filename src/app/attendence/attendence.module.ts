import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { Attendence } from './attendence.page';
import { CreateAttendence } from './create/createattendence.page';
import { EditAttendence } from './edit/editattendence.page';
import { ViewAttendence } from './view/viewattendence.page';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule} from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { CreateAttendenceResolver } from './common-resolver/createattendence.resolver';
import { ViewAttendenceResolver } from './common-resolver/viewattendence.resolver';
import { EditAttendenceResolver } from './common-resolver/editattendence.resolver';
import { ViewAttendenceDetails } from './view/viewattendencedetails.page';
import { ViewStudentAttendence } from './view/viewstudentattendence.page';
import { AlertPage } from '../alert/alert.page';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    ExploreContainerComponentModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule.forChild([
    { path: '', 
     children: [
          {
            path: '',
            component: Attendence 
          },
         {
            path: 'create',
            component: CreateAttendence, 
             resolve: {
                attendencedetails: CreateAttendenceResolver
          }
         },
         {
            path: 'viewattendence',
            component: ViewStudentAttendence, 
             resolve: {
                attendencedetails: CreateAttendenceResolver
          }
         },
         
         {
          path: ':id',
          children: [
          {
            path: '',
            component: ViewAttendence, 
            resolve: {
                attendencedetails: ViewAttendenceResolver
               }
           },
           {
            path: ':id',
            component: ViewAttendenceDetails ,
            resolve: {
                attendencedetails: EditAttendenceResolver
           }
          },
          {
            path: ':id/edit',
            component: EditAttendence ,
            resolve: {
                attendencedetails: EditAttendenceResolver
           }
          }
          
        ]  
        }
     ]
    }
    ])
  ],
  declarations: [Attendence,CreateAttendence,EditAttendence,ViewAttendence,ViewAttendenceDetails,ViewStudentAttendence,AlertPage],
  providers: [CreateAttendenceResolver,ViewAttendenceResolver,EditAttendenceResolver,DatePipe]
  
})
export class AttendenceModule {}
