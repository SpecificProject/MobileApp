import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { LeaveManagement } from './leavemanagement.page';
import { CreateLeaveManagement } from './create/createleavemanagement.page';
import { EditLeaveManagement } from './edit/editleavemanagement.page';
import { ViewLeaveManagement } from './view/viewleavemanagement.page';
import { ViewLeaveManagementDetails } from './view/viewleavemanagementdetails.page';

import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatePipe } from '@angular/common'
import { CreateLeaveManagementResolver } from './common-resolver/createleavemanagement.resolver';
import { StaffLeaveManagementResolver } from './common-resolver/staffleavedetails.resolver';
import { LeaveManagementResolver } from './common-resolver/leavemanagement.resolver';
import { StaffLeaveManagementDetailsResolver } from './common-resolver/staffleavemanagement.resolver';


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
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    RouterModule.forChild([
    { path: '', 
     children: [
          {
            path: '',
            component: LeaveManagement 
          },
         {
            path: 'create',
            component: CreateLeaveManagement,
            resolve: {
                leavedetailsTemplate: CreateLeaveManagementResolver,
                avaliableleavedetails: StaffLeaveManagementResolver
             }  
         },
         {
            path: 'viewleave',
            component: ViewLeaveManagementDetails,
            resolve: {
                staffleavedetails: StaffLeaveManagementDetailsResolver
             }  
         },
         {
          path: ':id',
          children: [
          {
            path: '',
            component: ViewLeaveManagement,
            resolve: {
                leavedetails: LeaveManagementResolver,
             } 
          },
          {
            path: 'edit',
            component: EditLeaveManagement,
            resolve: {
                leavedetails: LeaveManagementResolver,
             } 
          }
        ]  
        }
     ]
    }
    ])
  ],
  declarations: [LeaveManagement,CreateLeaveManagement,EditLeaveManagement,ViewLeaveManagement,ViewLeaveManagementDetails],
   providers: [CreateLeaveManagementResolver,StaffLeaveManagementResolver,LeaveManagementResolver,DatePipe,StaffLeaveManagementDetailsResolver]
  
})
export class LeaveManagementModule {}
  