import { Component } from '@angular/core';

@Component({
  selector: 'today-task',
  templateUrl: 'todaytask.page.html',
  styleUrls: ['todaytask.page.scss']
})
export class TodayTask {
  lecturedetails:any=[];
  constructor() {
    this.lecturedetails=[{'id':1,'name':'gghhgghhg'},{'id':1,'name':'gghhgghhg'},{'id':1,'name':'gghhgghhg'},{'id':1,'name':'gghhgghhg'}];
  }

}
