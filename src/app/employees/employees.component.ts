import { Component } from '@angular/core';
import {Employee, EmployeeType} from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employees: Employee[] = [];
  selectedEmp!: Employee;

  constructor() {
    this.employees[0] = new Employee(1, 'Olatunji Omisakin', 1000000, new Date(1991, 7, 10), EmployeeType.Permanent),
    this.employees[1] = new Employee(2, 'Daniel Ale', 500000, new Date(2000, 10, 10), EmployeeType.Contract),
    this.employees[2] = new Employee(3, 'Mariam Esther', 700000, new Date(1995, 5, 1), EmployeeType.Daily),
    this.employees[3] = new Employee(4, 'Mohammed Ali', 10000000, new Date(1993, 22, 5), EmployeeType.Temporal)
  }

  makeBold(e: Employee) {
    this.selectedEmp = e;
  }
}
