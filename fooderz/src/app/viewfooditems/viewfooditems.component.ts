import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../food';
import { FoodcrudService } from '../foodcrud.service';

@Component({
  selector: 'app-viewfooditems',
  templateUrl: './viewfooditems.component.html',
  styleUrls: ['./viewfooditems.component.css']
})
export class ViewfooditemsComponent implements OnInit {

  private foods:Food[];

  constructor(private service :FoodcrudService , private router:Router ) { 

  }

  

  ngOnInit() {
    this.service.getAllFoods().subscribe(res=>{
      console.log("hii");
      this.foods=res;
  })

}
}
