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

   foods:Food[];
  id:number;

  constructor(private service :FoodcrudService , private router:Router ) { 

  }

  
  ngOnInit() {
    this.refreshEmployee();
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

