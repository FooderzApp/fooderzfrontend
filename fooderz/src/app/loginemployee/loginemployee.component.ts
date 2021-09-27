import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-loginemployee',
  templateUrl: './loginemployee.component.html',
  styleUrls: ['./loginemployee.component.css']
})
export class LoginemployeeComponent implements OnInit {

  private employee:Employee;
  private value;


  constructor(private service :EmployeeService, private router:Router) { 
    this.employee = new Employee();
  }
  public employeeLogin(employeeEmail,employeePassword):any{
    this.employee.employeeEmail=employeeEmail;
    this.employee.employeePassword=employeePassword;


  }

  ngOnInit() { 
    this.service.employeeLogin(this.employee.employeeEmail,this.employee.employeePassword).subscribe(res=>{
      if(res==true)
      {
        this.router.navigate(['/employeedashboard'])
      }
    })
  }

      
    
  }
  


