import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-logincustomer',
  templateUrl: './logincustomer.component.html',
  styleUrls: ['./logincustomer.component.css']
})
export class LogincustomerComponent  {

  customer:Customer;
  msg='';
  constructor(private service:RegistrationService,  private router:Router) { 
    this.customer=new Customer();
  }

  gotocustomer(){
    this.service.loginCustomer(this.customer).subscribe(res=>{
      console.log("response recived"); 
      this.msg="login successfull";
      alert(this.msg);   
      this.router.navigate(['/viewcustomer']);
    },error=>{
      console.log("exception occured");
      this.msg="sorry not valid one";
      alert(this.msg);
      })
  }  
  

}
