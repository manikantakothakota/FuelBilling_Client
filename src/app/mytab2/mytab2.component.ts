import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Fuel } from './fuel';
import { FuelService } from './fuel.service';
import { Observable, VirtualTimeScheduler } from "rxjs";


@Component({
  selector: 'app-mytab2',
  templateUrl: './mytab2.component.html',
  styleUrls: ['./mytab2.component.css']
})
export class Mytab2Component {
  constructor(private toastr: ToastrService, private fs: FuelService) { }

  fuelobj: Fuel = new Fuel();
  submitted = false;

  fuel: number = 0;
  price: number = 0;
  total: number = 0;
  /*fuellist: Object[] = [];*/
  //idgeneration: any = 0;
  isNew: boolean = true;
  editObj = {};

  isdisable = true;
  id: any = 0;
  fuellist: any = [];

  ngOnInit() {
    this.getall();
  }

  getall() {
    this.fs.getFuelbillsList().subscribe(
      (result: any) => {
        // call back functions
        // alert('positive');
        this.fuellist = result;
      },
      (error: any) => {
        alert('erro');
      }
    )
  }

  calculate() {
    this.total = this.fuel * this.price;
    this.toastr.success('fuel data calculated sudessfully');
    this.isdisable = false;
  }

  add() {
    let fuel = {
      "fuel": this.fuel,
      "price": this.price,
      "total": this.total
      // "id":this.idgeneration
    }

    this.fs.createFuelbill(fuel).subscribe(
      (result: any) => {
        console.log(result);
        this.toastr.success('fuel data added sudessfully');
        this.clear();
        this.getall();
      },
      (error: any) => {
        this.toastr.error('fuel data not added');

      }
    )

  }

  edit(fuelobj: any, id: any) {
    console.log(fuelobj);
    this.fuel = fuelobj.fuel;
    this.price = fuelobj.price;
    this.total = fuelobj.total;
    this.id = fuelobj.id;

    this.editObj = fuelobj;

    this.isNew = false;
  }

  update() {
    this.editObj['price'] = this.price;
    this.editObj['fuel'] = this.fuel;
    this.editObj['total'] = this.total;

    this.fs.updateFuelbill(this.id, this.editObj).subscribe(
      (result: any) => {
        console.log(result);
        this.toastr.success('obj updated sucessfully ' + this.id);
        this.getall();

      }, (error: any) => {
        this.toastr.error('obj not updated ' + this.id);
      }
    )
  }

  delete(id: number) {
    this.fs.deleteFuelbill(id).subscribe(
      (result: any) => {
        console.log(result);
        this.toastr.success('deleted sucessfully' + id);
        this.getall();
      }, (error: any) => {
        console.log(error);
        this.toastr.error('deleted sucessfully' + id);
      }

    )
  }


  clear() {
    this.fuel = 0;
    this.price = 0;
    this.total = 0;
    this.isdisable = true;
  }
  /* add() {
     this.idgeneration++;
     let fuel = {
       "fuel": this.fuel,
       "price": this.price,
       "total": this.total,
       "id":this.idgeneration
     }
     this.fuellist.push(fuel);
     this.toastr.success('fuel data added sudessfully');
     this.clear();
     
   }
   
   edit(fuelobj: any) {
     console.log(fuelobj);
     this.fuel=fuelobj.fuel;
     this.price=fuelobj.price;
     this.total=fuelobj.total;
 
     this.editObj = fuelobj;
 
     this.isNew = false;
   }
 
   update() {
     console.log(this.editObj);
     this.editObj['price'] = this.price;
     this.editObj['fuel'] = this.fuel;
     this.editObj['total'] = this.total;
     this.toastr.success('fuel data updated sudessfully');
     this.clear();
     this.isNew = true;
   }
 
   delete(id){
    var number= this.fuellist.indexOf(id);
     this.fuellist.splice(number, id);
     this.toastr.success('fuel data deleted sudessfully');
 
   }
   
 
   clear(){
     this.fuel=0;
     this.price=0;
     this.total=0;
     this.isdisable=true;
   }*/
}
