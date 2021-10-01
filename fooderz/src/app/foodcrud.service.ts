import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodcrudService {

  private url:string;

  constructor(private http:HttpClient) { 
    this.url="http://localhost:9500/food";

  }
  public addFood (food : Food): Observable<Food>
  {
     return this.http.post<Food>(this.url,food);
  }
  public deleteFood (id:number):Observable<any>{
    return this.http.delete(this.url+`/${id}`);
  }
  public getAllFoods():Observable<Food[]>
  {

     return this.http.get<Food[]>(this.url);
  }

  public getFoodById(id:number):Observable<Food>{
    return this.http.get<Food>("http://localhost:9500/food/" + `/${id}`) ;
  }
}
