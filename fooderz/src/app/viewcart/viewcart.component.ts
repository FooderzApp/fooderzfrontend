
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { stringify } from 'querystring';

import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Customer } from '../customer';
import { Food } from '../food';
import { Order } from '../order';
import { OrderService } from '../order.service';

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
order:Order;
  constructor(private service:CartService,private service2:OrderService,private router:Router) {
    this.cart1=new Cart();
    this.cart1.customer=new Customer();
    this.cart1.foodList=new Food();
    this.foods1=[];
    this.order=new Order();

   }

  ngOnInit() {
    this.refreshCart();
  }

  // refreshCart(){
  //   this.service.getAllCarts().subscribe(res=>{
  //     this.cart1=res;

 
  //   }

//  cart:Cart;
// cart1:Cart[];
// foods1:Food[];
// food2:Food;
temp;







  // constructor(private service:CartService,private service2:OrderService) { 
  //   this.foods1=[];
  //   this.order=new Order();
  // }


 

  
  refreshCart():any{
    this.service.getAllCarts().subscribe(res=>{
     // this.foods1.push(this.food2);
      this.cart=res;
     
      
    })
  }

  deleteCart(id:number){
    this.service.deleteCart(id).subscribe(res=>{
      console.log(id);
      console.log(res);
      this.refreshCart();
      

    })
    
 }
 public addtoorder(id)

 { 
   alert("added to cart successfully")
    console.log(id);
   this.service.getcartitembyid(id).subscribe(res=>{
 
     this.temp=res;
     this.order.customer=this.temp.customer;
     this.order.food=this.temp.foodList;
     console.log(this.temp);
     console.log(this.temp.foodList);
     this.service2.addOrder(this.order).subscribe(res=>{
       console.log(this.order);
      
      
       this.order=new Order();
       this.router.navigate(['/vieworders']);
     });


   });
  

 }





}

  
  
