import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  customer:Customer[];
  constructor(private service:CustomerService,private router:Router) {
   // this.customer=new Customer();
   }

  ngOnInit() {
    this.refreshCustomer();
  }

  refreshCustomer(){
    this.service.getAllCustomers().subscribe(res=>{
      this.customer=res;
    })
  }

}
