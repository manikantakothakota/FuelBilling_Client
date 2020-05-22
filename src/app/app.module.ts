import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { MytableComponent } from './mytable/mytable.component';
import { Mytab1Component } from './mytab1/mytab1.component';
import { Mytab2Component } from './mytab2/mytab2.component';
import { Mytab3Component } from './mytab3/mytab3.component';
import { Mytab4Component } from './mytab4/mytab4.component';
@NgModule({
  declarations: [
   
    AppComponent,
    MytableComponent,
    Mytab1Component,
    Mytab2Component,
    Mytab3Component,
    Mytab4Component
    
  ],
  imports: [
    BrowserModule,FormsModule,BrowserAnimationsModule,HttpClientModule,
    ToastrModule.forRoot() 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
