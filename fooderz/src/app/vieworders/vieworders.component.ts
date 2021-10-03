import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {

  orders:Order[];
  id:number;



  constructor(private service2:OrderService,private router:Router) { 
      
  }

  ngOnInit()
   {
    this.refreshorder();
   }
   refreshorder()
   {
     this.service2.getallOrders().subscribe(res=>{
       this.orders=res;

     });
   }
   public deleteorder(id){
     console.log("hello");
    console.log("hii");
    this.service2.deleteorder(id).subscribe(res=>
      {this.refreshorder()});
     

  
 
 }


}
