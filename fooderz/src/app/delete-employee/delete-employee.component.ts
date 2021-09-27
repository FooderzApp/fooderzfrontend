import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {
 private employee:Employee;
 employeeId:number;
 message:string;
 private employee1:Employee[];
  constructor(private service : EmployeeService,private router:Router) { 
    this.employee = new Employee();
  }

  refreshEmployee(){
    this.service.viewEmployees().subscribe(res => {
      this.employee1 = res;
    })
  }

  public deleteEmployee(employeeId){
    console.log(`delete the employee ${employeeId}`);
    
    this.service.deleteEmployee(employeeId).subscribe(res=>{
      console.log(res);
      this.message=`player deleted successfully ${employeeId}`;
      this.refreshEmployee();

    
      
      
    })
   

      
 
  }
}
