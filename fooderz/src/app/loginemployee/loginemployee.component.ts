import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertPromise } from 'selenium-webdriver';

import { Employee } from '../employee';
import { EmployeeloginService } from '../employeelogin.service';

@Component({
  selector: 'app-loginemployee',
  templateUrl: './loginemployee.component.html',
  styleUrls: ['./loginemployee.component.css']
})
export class LoginemployeeComponent implements OnInit {

  employee:Employee;
  email:string;
  password:string;

  constructor(private service:EmployeeloginService,private router:Router) { 
    this.employee=new Employee();
    
  }

  ngOnInit() {

  }
  public employeelogin(email,password)
  {
    console.log("hiii")
  
    console.log(this.employee.employeeEmail,this.employee.employeePassword);
    this.service.employeelogin(this.employee.employeeEmail,this.employee.employeePassword).subscribe(res=>{
      console.log(this.employee.employeeEmail,this.employee.employeePassword);
      this.employee=new Employee();
      console.log(res);
      if(res==false)
      {
        alert("wrongcreds");
      }
      else{
        this.router.navigate(["/employeedashboard"]);
        
      }
      
    } )
    console.log("hello2");
    
    
  }

}
