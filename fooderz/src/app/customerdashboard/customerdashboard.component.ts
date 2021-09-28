import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodcrudService } from '../foodcrud.service';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {
  foods:Food[];

  constructor(private service:FoodcrudService) { }

  ngOnInit() {
    this.service.getAllFoods().subscribe(res=>{
      this.foods=res;
    })
  }

}
