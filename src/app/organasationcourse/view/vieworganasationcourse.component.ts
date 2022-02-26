import { Component ,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'view-organasationcourse',
  templateUrl: 'vieworganasationcourse.component.html',
  styleUrls: ['vieworganasationcourse.component.scss']
})
export class ViewOrganasationCourse implements OnInit {
  organasationCourse:any;
  safeSrc: SafeResourceUrl;
  
  constructor(private router: Router,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) {
              this.route.data.subscribe(( data: { organasationCourse: any }) => {
              this.organasationCourse = data.organasationCourse;
                             this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.organasationCourse.courseUrl);
              
               });
              }
              
  ngOnInit() {
   
   }              
   
  update(id:string){
             this.router.navigate(['./edit'],{relativeTo: this.route});
  
  }          
}
