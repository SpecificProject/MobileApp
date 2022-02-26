import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'payments-page',
  templateUrl: 'payments.page.html',
  styleUrls: ['payments.page.scss']
})
export class Payments {
  paymentdetails:any;
  deducationdetails:any;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
               this.route.data.subscribe(( data: { paymentdetails: any }) => {
              this.paymentdetails = data.paymentdetails;
              this.deducationdetails = data.paymentdetails.deducationdetails;
               });
              }
       
   ngOnInit() {
   
   }
              
   
 
   submit(){
           this.router.navigate(['../1'],{relativeTo: this.route});
   }
              

}
