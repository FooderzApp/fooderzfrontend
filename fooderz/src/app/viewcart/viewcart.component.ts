
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { stringify } from 'querystring';

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
// cart:Cart;
// cart1:Cart[];
foods1:Food[];
food2:Food;

  constructor(private service:CartService,router:Router) {
    this.cart1=new Cart();
    this.cart1.customer=new Customer();
    this.cart1.foodList=new Food();

   }

  ngOnInit() {
    this.refreshCart();
  }

  // refreshCart(){
  //   this.service.getAllCarts().subscribe(res=>{
  //     this.cart1=res;

 
  //   }

 

  
  refreshCart():any{
    this.service.getAllCarts().subscribe(res=>{
     // this.foods1.push(this.food2);
      this.cart=res;
     
      
    })
  }

  deleteCart(id:number){
    this.service.deleteCart(id).subscribe(res=>{
      console.log(res);
      this.refreshCart();
      

    })
  }


}

  
  
