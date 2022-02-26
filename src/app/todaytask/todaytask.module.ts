import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodayTask } from './todaytask.page';
import { TodayTaskResolver } from './common-resolver/todaytask.resolver';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([
    { path: '',
    component: TodayTask,
    resolve: {
                todaytask: TodayTaskResolver
       }
     }
    ])
  ],
  declarations: [TodayTask],
  providers: [TodayTaskResolver]
})
export class TodayTaskModule {

}
