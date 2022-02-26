import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'viewleavemanagement-page',
  templateUrl: 'viewleavemanagement.page.html',
  styleUrls: ['viewleavemanagement.page.scss']
})
export class ViewLeaveManagement {
 leavedetails:any;
  constructor(private router: Router,
              private route: ActivatedRoute) {
              this.route.data.subscribe(( data: { leavedetails: any  }) => {
              this.leavedetails = data.leavedetails;
          });
              }
  
  update(id:string){
             this.router.navigate([`../${id}/edit`],{relativeTo: this.route});
  
  } 

}
