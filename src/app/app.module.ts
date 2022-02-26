import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayTask } from './todaytask/todaytask.page';
import { Payments } from './payments/payments.page';
import { MeetingPage } from './meetings/meetings.page';
import { Attendence } from './attendence/attendence.page';
import { DiaryManagement } from './diarymanagement/diarymanagement.page';
import { ExploreContainerComponentModule } from './explore-container/explore-container.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { OnlineClass } from './onlineclass/onlineclass.page';


@NgModule({
  declarations: [AppComponent,OnlineClass],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FlexLayoutModule,HttpClientModule,MatSelectModule,MatAutocompleteModule,MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule,MatButtonModule,MatDatepickerModule,MatCheckboxModule,MatNativeDateModule, BrowserAnimationsModule],
  exports: [
    MatSelectModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
