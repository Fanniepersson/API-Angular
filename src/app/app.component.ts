import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './Models/employee.model';
import { Department } from './Models/department.model';
import { EmployeeService } from './service/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Personal-Registration';
  
  employees: Employee[] = [];

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



 

}


