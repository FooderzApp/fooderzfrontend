import { Component, Input, OnInit } from '@angular/core';
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
 cart:Cart;
cart1:Cart[];
foods1:Food[];
food2:Food;
  constructor(private service:CartService) { 
    this.foods1=[];
  }

  ngOnInit() {
   this.refreshCart();
  
  }

  
  refreshCart():any{
    this.service.getAllCarts().subscribe(res=>{
     // this.foods1.push(this.food2);
      this.cart1=res;
     
      
    })
  }

  deleteCart(id){
    this.service.deleteCart(id).subscribe(res=>{
      console.log(res);
      this.refreshCart();
      
    })
  }


}
