import { Component } from '@angular/core';
import { timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
     seconds:number=0;
     minutes:number=0;
     interval;
     subscribeTimer: any;

     onStart(){
      this.interval = setInterval(() => {
        
          this.seconds=this.seconds+1;
       if(this.seconds>59){
         this.minutes=this.minutes+1;
         this.seconds=0;
       }
      },1000)
     

    }
    pause() {
      clearInterval(this.interval);
    }
  }