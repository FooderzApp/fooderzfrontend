import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  public employee:Employee;

  constructor(private service: EmployeeService, private router: Router) {
    this.employee = new Employee();
  }


  public addemployee(): void {
    this.service.addEmployee(this.employee).subscribe(res => {
      this.employee = new Employee();
      this.router.navigate(['/viewemployees']);
    })
  }

}
