import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'diarymanagement-page',
  templateUrl: 'viewdiarymanagement.page.html',
  styleUrls: ['viewdiarymanagement.page.scss']
})
export class ViewDiaryManagement {
 diaryManagementdata:any;
  constructor(private router: Router,
              private route: ActivatedRoute) {
              this.route.data.subscribe(( data: { diarymanagementdata: any }) => {
              this.diaryManagementdata = data.diarymanagementdata;
               });
              }
  
  update(id:string){
             this.router.navigate([`../${id}/edit`],{relativeTo: this.route});
  
  } 

}
