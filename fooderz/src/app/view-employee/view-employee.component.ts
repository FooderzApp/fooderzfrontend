import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employee:Employee[];
  constructor(private service:EmployeeService,private router:Router) {
  
   }

  ngOnInit() {
    this.refreshEmployee();
  }

  refreshEmployee(){
    this.service.viewEmployees().subscribe(res=>{
      this.employee=res;
    })
  }


}
