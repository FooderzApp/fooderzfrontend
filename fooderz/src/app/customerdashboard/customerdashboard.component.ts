import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Customer } from '../customer';
import { Food } from '../food';
import { FoodcrudService } from '../foodcrud.service';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {
  foods:Food[];
 cart:Cart;
  cart1:Cart[];
  food1:Food;
  // @Input() foodItem:Food;

  

  constructor(private service:FoodcrudService,private service1:CartService, private router:Router) {
    this.cart=new Cart();
    this.cart.customer=new Customer();
    this.cart.foodList=new Food();
  
   }

  ngOnInit() {
    this.refreshfood();
  }

  refreshfood(){
    this.service.getAllFoods().subscribe(res=>{
      this.foods=res;
    })
  }


 addToCart(id:number){
  this.service.getFoodById(id).subscribe(res=>{
    // this.cart.foods.push(this.food1);
    // this.cart=new Cart();
    this.cart=new Cart();
    localStorage.setItem("name",JSON.stringify(res));
    let obj=JSON.parse(localStorage.getItem("name"));
    let obj1=JSON.parse(localStorage.getItem("id"))
    this.cart.customer=obj1;
     this.cart.foodList=obj;
    this.service1.addCart(this.cart).subscribe();
    this.router.navigate(['/viewcart']);
    this.refreshfood();
  })
  }

}
