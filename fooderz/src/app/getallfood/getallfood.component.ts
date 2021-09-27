import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-getallfood',
  templateUrl: './getallfood.component.html',
  styleUrls: ['./getallfood.component.css']
})
export class GetallfoodComponent implements OnInit {
   
  private foods:Food[];

  constructor(private service :FoodService , private router:Router ) { 

  }

  ngOnInit() {
    this.service.getAllFoods().subscribe(res=>{
      this.foods=res;
    })
  }

}
