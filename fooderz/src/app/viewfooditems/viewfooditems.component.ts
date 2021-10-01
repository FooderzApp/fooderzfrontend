import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Food } from '../food';
import { FoodcrudService } from '../foodcrud.service';

@Component({
  selector: 'app-viewfooditems',
  templateUrl: './viewfooditems.component.html',
  styleUrls: ['./viewfooditems.component.css']
})
export class ViewfooditemsComponent implements OnInit {

  private foods:Food[];
  private cart:Cart;
  private food:Food;


  constructor(private service :FoodcrudService,private service1:CartService , private router:Router ) { 

  }

  

  ngOnInit() {
  this.refreshFood();

}

refreshFood(){
  this.service.getAllFoods().subscribe(res=>{
  //  console.log("hii");
    this.foods=res;
    this.router.navigate(['/viewfooditems'])
})
}

public addCart(cart:Cart){
  this.service1.addCart(this.cart).subscribe(res=>{
    this.cart=new Cart();
    console.log(res);
    this.router.navigate(['/viewcart']);
    
  })
  // this.router.navigate(['/viewcart']);
  
}


}


