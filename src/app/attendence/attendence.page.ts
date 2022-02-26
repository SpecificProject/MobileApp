import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'attendence-page',
  templateUrl: 'attendence.page.html',
  styleUrls: ['attendence.page.scss']
})
export class Attendence {

  constructor(private router:Router ,private route:ActivatedRoute) {}
  
   attendence(){
         this.router.navigate(['create'], {relativeTo: this.route});
  }
  
  viewattendence(){
         this.router.navigate(['viewattendence'], {relativeTo: this.route});
   } 

}
