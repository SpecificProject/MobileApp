import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import DailyIframe from '@daily-co/daily-js';

@Component({
  selector: 'onlineclass-page',
  templateUrl: 'onlineclass.page.html',
  styleUrls: ['onlineclass.page.scss']
})
export class OnlineClass {
  
  organasationcourseone:any;
  organasationcoursetwo:any;
  organasationcoursethree:any;
  organasationcoursefour:any;
  organasationcoursedata:any;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
               this.route.data.subscribe(( data: { organasationcoursedetails: any }) => {
              this.organasationcourseone = data.organasationcoursedetails.organasationcourseoneData;
              this.organasationcoursetwo = data.organasationcoursedetails.organasationcoursetwoData;
              this.organasationcoursethree = data.organasationcoursedetails.organasationcoursethreeData;
              this.organasationcoursefour = data.organasationcoursedetails.organasationcoursefourData;
               });
              }
       
   ngOnInit() {
   this.organasationcoursedata=[];
   for(var i =0;i<this.organasationcourseone.length;i++){
       this.organasationcoursedata.push(this.organasationcourseone[i]);
   }
   for(var i =0;i<this.organasationcoursetwo.length;i++){
       this.organasationcoursedata.push(this.organasationcoursetwo[i]);
   }
   for(var i =0;i<this.organasationcoursethree.length;i++){
       this.organasationcoursedata.push(this.organasationcoursethree[i]);
   }
   for(var i =0;i<this.organasationcoursefour.length;i++){
       this.organasationcoursedata.push(this.organasationcoursefour[i]);
   }
   
   }
    
   startclass(){
      //        this.router.navigate(['../onlineclassvediostart'],{relativeTo: this.route});
   const callFrametest = DailyIframe.createFrame({'showFullscreenButton': true, 'showLeaveButton':true});
   callFrametest.join({ 'url': 'https://tonlinetest.daily.co/FirstRoom' });
   

   }
  
 
   submit(){
   }
              

}
