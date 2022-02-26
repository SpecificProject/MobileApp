import { Component ,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'view-exammarkdetails',
  templateUrl: 'viewexammarksdetail.component.html',
  styleUrls: ['viewexammarksdetail.component.scss']
})
export class ViewExamMarksDetail implements OnInit {
  exammarksdetails:any;
  constructor(private router: Router,
              private route: ActivatedRoute) {
              this.route.data.subscribe(( data: { exammarksdetails: any }) => {
              this.exammarksdetails = data.exammarksdetails;
               });
              }
              
  ngOnInit() {
   
   }              
   
  update(id:string){
            const sectionId=this.route.snapshot.paramMap.get('id');
             this.router.navigate([`./${id}/edit`],{relativeTo: this.route});
  
  }          
}
