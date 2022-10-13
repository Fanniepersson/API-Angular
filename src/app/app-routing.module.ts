import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: 'add-employee', component: AddEmployeeComponent },
  { path: 'all-employees', component: AllEmployeesComponent },
  { path: 'home', component: HomeComponent },
];



@NgModule({
  declarations: [
 
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
