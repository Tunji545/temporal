export const enum EmployeeType {
  Daily='daily', Temporal='temporal', Contract='contract', Permanent='permanent'
}

export class Employee {

Id: number;
  Name: string;
  Salary: number;
  Date: Date;
  EmpType: EmployeeType;

  constructor(id: number, name: string, salary: number, date: Date, empType: EmployeeType) {
    this.Id = id;
    this.Name = name;
    this.Salary = salary;
    this.Date = date;
    this.EmpType = empType;
  }

}
