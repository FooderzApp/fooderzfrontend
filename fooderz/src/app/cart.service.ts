import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:9500/cart";
  }

  private addCart(cart:Cart):Observable<any>{
    return this.http.post<Cart>(this.url,cart);
  }

  private getAllCarts():Observable<any>{
    return this.http.get<Cart[]>(this.url);
  }

}
