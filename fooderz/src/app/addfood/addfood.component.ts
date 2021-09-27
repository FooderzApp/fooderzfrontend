import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent  {

  private food :Food;

  constructor(private service:FoodService,private router:Router) { 
    this.food = new Food();

  }

 public addFood():void{
   this.service.addFood(this.food).subscribe(res=>
    {
      this.food=new Food;
      this.router.navigate(["/viewfooditems"]);
    })

 }

}
