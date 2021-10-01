import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Customer } from '../customer';
import { Food } from '../food';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
cart:Cart;
  //router: any;
  constructor(private service:CartService,private router:Router) { 
    this.cart=new Cart();
    this.cart.customer=new Customer();
    this.cart.foods=new Food();
  }

  ngOnInit() {
  }

  public addCart(cart:Cart){
    this.service.addCart(this.cart).subscribe(res=>{
      this.cart=new Cart();
      this.router.navigate(['/viewcart']);
    })
  }

}
