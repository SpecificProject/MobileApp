import { Component ,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'diarymanagement-page',
  templateUrl: 'viewattendence.page.html',
  styleUrls: ['viewattendence.page.scss']
})
export class ViewAttendence implements OnInit {
  attendencedetaildata:any;
  constructor(private router: Router,
              private route: ActivatedRoute) {
              this.route.data.subscribe(( data: { attendencedetails: any }) => {
              this.attendencedetaildata = data.attendencedetails;
               });
              }
              
  ngOnInit() {
   
   }              
   users: any[] = [
    {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
    {
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    },
     {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
    {
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    }, {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
    {
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    }, {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
    {
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    }
  ];
  update(id:string){
            const sectionId=this.route.snapshot.paramMap.get('id');
             this.router.navigate([`../${sectionId}/${id}/edit`],{relativeTo: this.route});
  
  }          
}
