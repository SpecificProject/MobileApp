import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'holiday-page',
  templateUrl: 'holiday.page.html',
  styleUrls: ['holiday.page.scss']
})
export class Holiday {
  holidaydetails:any;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
              this.route.data.subscribe(( data: { holidaydetails: any }) => {
              this.holidaydetails = data.holidaydetails;
               });
              }
       
   ngOnInit() {
   
   }
              
   
 
   submit(){
           this.router.navigate(['../1'],{relativeTo: this.route});
   }
              

}
