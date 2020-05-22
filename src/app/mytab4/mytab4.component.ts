import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytab4',
  templateUrl: './mytab4.component.html',
  styleUrls: ['./mytab4.component.css']
})
export class Mytab4Component  {

   fuel:number=0;
price:number=0 ;

total:number=0;
calculate()
{
this.total=this.fuel*this.price;
return this.total;
}  
}
