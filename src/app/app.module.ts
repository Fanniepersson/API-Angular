import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HttpClient} from '@angular/common/http'
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [ AppComponent, AddEmployeeComponent, AllEmployeesComponent, HomeComponent],
  imports: [ BrowserModule,AppRoutingModule,HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
