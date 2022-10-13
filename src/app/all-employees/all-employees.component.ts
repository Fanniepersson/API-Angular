import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { EmployeeService } from '../service/employees.service';
import { Department } from '../Models/department.model';


@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {
  title = 'Personal-Registration';

  employees: Employee[] = [];
  departments: Department [] = [];
  employee: Employee = {
   employeeId: 0,
   firstName: '',
   lastName: '',
   gender: '',
   email: '',
   phoneNumber: '',
   address: '',
   city: '',
   salary: 0,
   departmentId: 0,
   department: {
    departmentId: 0,
    departmentName: ''
  }
   
 
 }
 
 
 
 constructor(private EmployeeService: EmployeeService) {
 
 
 
 }
 
 
 
 
 
 
   ngOnInit(): void {
     this.GetAllEmployee();
   }
 
   // Get
 
   GetAllEmployee() {
     this.EmployeeService.GetAllEmployees()
       .subscribe(
         response => {
     
           this.employees = response;
         });
   }
 
 

 }
 