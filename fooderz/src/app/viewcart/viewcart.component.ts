import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Customer } from '../customer';
import { Food } from '../food';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

cart:Cart[];
cart1:Cart;

  constructor(private service:CartService,router:Router) {
    this.cart1=new Cart();
    this.cart1.customer=new Customer();
    this.cart1.foods=new Food();

   }

  ngOnInit() {
    this.refreshCart();
  }

  refreshCart(){
    this.service.getAllCart().subscribe(res=>{
      this.cart=res;
    })
  }


}
