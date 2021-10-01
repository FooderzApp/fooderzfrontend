import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../food';
import { FoodcrudService } from '../foodcrud.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent {
  private food :Food;
  

  constructor(private service:FoodcrudService,private router:Router) { 
    this.food = new Food();

  }

 public addFood():void{
   this.service.addFood(this.food).subscribe(res=>
    {
      console.log(this.food)
      this.food=new Food;
      this.router.navigate(["/viewfooditems"]);
    })

 }

  

}
