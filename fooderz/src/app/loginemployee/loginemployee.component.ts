import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  result:boolean;

  constructor(private service:EmployeeloginService,private router:Router) { 
    this.employee=new Employee();
    
  }

  ngOnInit() {

  }
  public employeelogin(email,password)
  {
    console.log("hiii")
    if(this.employee.employeeEmail == null || this.employee.employeePassword==null)
    {
      alert("fields cant be empty");
    }
   
   

   
    this.service.employeelogin(this.employee.employeeEmail,this.employee.employeePassword).subscribe(res=>{
      console.log(this.employee.employeeEmail,this.employee.employeePassword);
      this.employee=new Employee();
      console.log(res);
      this.result=res;
      if(res==false)
      {
        alert("invalid Credenttials");
      }
      else{
        this.router.navigate(["/employeedashboard"]);
        
      }
      
    } )
    return this.result;
    
    
  }

}
