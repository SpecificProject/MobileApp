import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { OnlineClass } from './onlineclass.page';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OnlineClassResolver } from './common-resolver/onlineclass.resolver';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([
    { 
      path: '',
      component: OnlineClass,
      resolve: {
                organasationcoursedetails: OnlineClassResolver,
        } 
      }
      ])
    ],
  declarations: [],
  providers: [OnlineClassResolver]
  
})
export class OnlineClassModule {}
