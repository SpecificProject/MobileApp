import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'organasation-course',
  templateUrl: 'organasationcourse.component.html',
  styleUrls: ['organasationcourse.component.scss']
})
export class OrganasationCourse {

  constructor(private router:Router ,private route:ActivatedRoute) {}
  
   attendence(){
         this.router.navigate(['create'], {relativeTo: this.route});
  }
  
  vieworganasationcourse(){
         this.router.navigate(['vieworganasationcourse'], {relativeTo: this.route});
   } 

}
