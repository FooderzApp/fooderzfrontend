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

  foods:Food[];
   cart:Cart;
  food:Food;

 

  id:number;


  constructor(private service :FoodcrudService,private service1:CartService , private router:Router ) { 

  }

  
  ngOnInit() {

  this.refreshFood();

    this.refreshEmployee();
    }

    refreshFood(){
      this.service.getAllFoods().subscribe(res=>{
      //  console.log("hii");
        this.foods=res;
        this.router.navigate(['/viewfooditems'])
    })
    }

    refreshEmployee(){
      this.service.getAllFoods().subscribe(res=>{
        this.foods=res;
      })
    }

    public deletefood(id){
      console.log("hii");
      this.service.deleteFood(id).subscribe(res=>{
       
    this.refreshEmployee();
    
  
      })
  }
}




// public addCart(cart:Cart){
//   this.service1.addCart(this.cart).subscribe(res=>{
//     this.cart=new Cart();
//     console.log(res);
//     this.router.navigate(['/viewcart']);
    
//   })
//   // this.router.navigate(['/viewcart']);
  
// }





