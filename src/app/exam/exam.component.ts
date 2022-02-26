import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'exam-component',
  templateUrl: 'exam.component.html',
  styleUrls: ['exam.component.scss']
})
export class ExamComponent {

  constructor(private router:Router ,private route:ActivatedRoute) {}
  
   attendence(){
         this.router.navigate(['create'], {relativeTo: this.route});
  }
  
  viewattendence(){
         this.router.navigate(['viewexammarksdetails'], {relativeTo: this.route});
   } 

}
