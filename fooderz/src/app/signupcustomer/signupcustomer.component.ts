import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-signupcustomer',
  templateUrl: './signupcustomer.component.html',
  styleUrls: ['./signupcustomer.component.css']
})
export class SignupcustomerComponent  {

  private customer:Customer;
  msg='';
  constructor(private service: RegistrationService, private router:Router) { 
    this.customer=new Customer();
  }

  AddLogin(){
  this.service.registerCustomer(this.customer).subscribe(res=>{
    this.router.navigate(['/logincustomer']);
    this.msg="Registration Successfull";
    alert(this.msg);
  },error=>{

    //alert("not registered successfully plz check the details");
    alert("email id alredy exits");
  

    alert("emailid is already present");
    this.msg=error.error;

  })
  }

}
