import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-deletefood',
  templateUrl: './deletefood.component.html',
  styleUrls: ['./deletefood.component.css']
})
export class DeletefoodComponent  {

      private food1:Food;
     
     
  
    

  constructor(private service:FoodService, private router:Router) { 
     this.food1=new Food();
     
    

     
 


  }
  public deletefood():void{

    console.log(this.food1.foodId);
    this.service.deleteFood(this.food1.foodId);
    this.food1 = new Food();
    this.router.navigate(["/viewfooditems"]);

  }


  

}
