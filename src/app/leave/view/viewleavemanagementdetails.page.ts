import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'viewleavemanagementdetails-page',
  templateUrl: 'viewleavemanagementdetails.page.html',
  styleUrls: ['viewleavemanagementdetails.page.scss']
})
export class ViewLeaveManagementDetails {
 staffleavedetails:any;
  constructor(private router: Router,
              private route: ActivatedRoute) {
              this.route.data.subscribe(( data: { staffleavedetails: any  }) => {
              this.staffleavedetails = data.staffleavedetails;
          });
              }
  
  update(id:string){
             this.router.navigate([`../${id}/edit`],{relativeTo: this.route});
  
  } 

}
