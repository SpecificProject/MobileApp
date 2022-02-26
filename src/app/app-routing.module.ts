import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { TodayTask } from './todaytask/todaytask.page';
import { Attendence } from './attendence/attendence.page';
import { DiaryManagement } from './diarymanagement/diarymanagement.page';
import { MeetingPage } from './meetings/meetings.page';
import { Payments } from './payments/payments.page';
import { Tab1Page } from './tab1/tab1.page';
import { LeaveManagement } from './leave/leavemanagement.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      
      {
        path: 'metting',
        children: [
          {
            path: '',
             loadChildren: () =>
              import('./meetings/meetings.module').then(m => m.MeetingPageModule) 
            }
        ]
      },
      
      {
        path: 'attendence',
        children: [
          {
            path: '',
              loadChildren: () =>
              import('./attendence/attendence.module').then(m => m.AttendenceModule) 
            }         
        ]
      },
      
      {
        path: 'payments',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./payments/payments.module').then(m => m.PaymentsModule) 

          }
        ]
      },
      
      {
        path: 'diarymanagement',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./diarymanagement/diarymanagement.module').then(m => m.DiaryManagementModule) 

          }
        ]
      },
      
      {
        path: 'leave',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./leave/leavemanagement.module').then(m => m.LeaveManagementModule) 

          }
        ]
      },
      
       {
        path: 'todaytask',
        children: [
          {
            path: '',
           loadChildren: () =>
              import('./todaytask/todaytask.module').then(m => m.TodayTaskModule) 


          }
        ]
      },
      {
        path: 'holiday',
        children: [
          {
            path: '',
           loadChildren: () =>
              import('./holiday/holiday.module').then(m => m.HoliDayModule) 


          }
        ]
      },
      {
        path: 'onlineclass',
        children: [
          {
            path: '',
           loadChildren: () =>
              import('./onlineclass/onlineclass.module').then(m => m.OnlineClassModule) 


          }
        ]
      },
      {
        path: 'organasationcourse',
        children: [
          {
            path: '',
           loadChildren: () =>
              import('./organasationcourse/organasationcourse.module').then(m => m.OrganasationCourseModule) 


          }
        ]
      },
      {
        path: 'exammarksdetails',
        children: [
          {
            path: '',
           loadChildren: () =>
              import('./exam/exam.module').then(m => m.ExameMarksDetailsModule) 


          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
/*
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
*/
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
