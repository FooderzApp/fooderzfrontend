import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

   url:any;
  constructor(private http:HttpClient) { 

    this.url="http://localhost:9500/customer/order";
  }

  public addOrder(order:Order):Observable<any>
  {
       return this.http.post<Order>(this.url,order);
  }
  public getallOrders():Observable<Order[]>
  {
    return this.http.get<Order[]>(this.url+"s");
  }
  public deleteorder(id:number):Observable<any>
  {
    return this.http.delete(this.url+`/${id}`);
  }
}
