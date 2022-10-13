import { HttpClient } from "@angular/common/http";
import { Employee } from "../Models/employee.model";
import { Department } from "../Models/department.model";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";
import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";



@Injectable({

    providedIn: 'root'

})

export class EmployeeService {

    baseUrl = 'https://localhost:7258/api/Employee';

    constructor(private http: HttpClient) { }




    // Get Employees

    GetAllEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.baseUrl);
    }



    // Add new Employee

    CreateEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.baseUrl, employee)

    }




    // Delete Employee

    DeleteEmployee(id: number): Observable<Employee> {
        return this.http.delete<Employee>(this.baseUrl + '/' + id)
    }




    // Update Employee

    UpdateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(this.baseUrl + '/' + employee.employeeId, employee)
    }

}