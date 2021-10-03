import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';

import { Food } from './food';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  url:string;

  constructor(private http:HttpClient) {
    this.url="http://localhost:9500/cart";
   }

   public addCart(cart:Cart): Observable<Cart>{
     return this.http.post<Cart>(this.url, cart);
   }

   public getAllCart(): Observable<Cart[]>{
     return this.http.get<Cart[]>(this.url);
   }

  constructor(private http:HttpClient) { 
    this.url="http://localhost:9500/cart";
  }

  public addCart(cart:Cart):Observable<any>{
    return this.http.post<Cart>(this.url,cart);
  }

  public getAllCarts():Observable<Cart[]>{
    return this.http.get<Cart[]>(this.url);
  }

  public deleteCart(id:number):Observable<any>{
    return this.http.delete(this.url + `/${id}`);
  }


}
