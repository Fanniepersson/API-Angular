import { Department } from "./department.model";

export interface Employee{
    employeeId: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    gender: string;
    address: string;
    city: string;
    salary: number;

    departmentId: number;
    department? : Department

}