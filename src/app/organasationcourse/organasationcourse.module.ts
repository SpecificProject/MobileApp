import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { OrganasationCourse } from './organasationcourse.component';
import { CreateOrganasationCourseComponent } from './create/createorganasationcourse.component';
import { EditOnlineOrganasationCourseComponent } from './edit/editorganasationcourse.component';
import { ViewOrganasationCourse } from './view/vieworganasationcourse.component';
import { ViewOrganasationCourseDetails } from './view/vieworganasationcoursedetails.component';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe } from '@angular/common';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { OrganasationCourseDetails } from './common-resolver/organasationcoursedetails.resolver';
import { OrganasationCourses } from './common-resolver/organasationcourses.resolver';
import { ViewOrganasationCourseResolver } from './common-resolver/vieworganasationcourse.resolver';

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
            component: OrganasationCourse 
          },
         {
            path: 'create',
            component: CreateOrganasationCourseComponent,
             resolve: {
                organasationtemplate: OrganasationCourseDetails
          } 
         },
         {
            path: 'vieworganasationcourse',
            component: ViewOrganasationCourseDetails 
         },
         {
          path: ':id',
          children: [
          {
            path: '',
            component: ViewOrganasationCourse, 
            resolve: {
                organasationCourse: ViewOrganasationCourseResolver
             } 
          },
          {
            path: 'edit',
            component: EditOnlineOrganasationCourseComponent ,
            resolve: {
                organasationCourse: ViewOrganasationCourseResolver,
                organasationtemplate: OrganasationCourseDetails
                
             } 
          }
        ]  
        }
     ]
    }
    ])
  ],
  declarations: [OrganasationCourse,CreateOrganasationCourseComponent,EditOnlineOrganasationCourseComponent,ViewOrganasationCourse,ViewOrganasationCourseDetails],
    providers: [OrganasationCourses,OrganasationCourseDetails,ViewOrganasationCourseResolver,DatePipe]
  
})
export class OrganasationCourseModule {}
  