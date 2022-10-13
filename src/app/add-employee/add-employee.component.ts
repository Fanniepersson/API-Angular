import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { EmployeeService } from '../service/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent {
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
  departmentId: 0

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

  // Add 
onSubmit() {

  if (this.employee.employeeId == 0) {

    this.EmployeeService.CreateEmployee(this.employee).subscribe(
      response => {
        this.GetAllEmployee();
        this.employee = {
          employeeId: 0,
          firstName: '',
          lastName: '',
          gender: '',
          address: '',
          city: '',
          phoneNumber: '',
          email: '',
          salary: 0,
          departmentId: 0,
        }
      }
    );
  }
  else {
    this.UpdateEmployee(this.employee);
  }

}

// Update

UpdateEmployee(employee: Employee) {
  this.EmployeeService.UpdateEmployee(employee).subscribe(
    response => {
      this.GetAllEmployee();
    }
  )
}



// Delete

onDelete(id: number) {
  this.EmployeeService.DeleteEmployee(id)
    .subscribe(
      response => {
        this.GetAllEmployee();
      }
    )
}



populateForm(employee: Employee) {

  this.employee = employee;

}

}
