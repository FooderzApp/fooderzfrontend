import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url:string
  constructor(private http:HttpClient) { 
    this.url="http://localhost:9500/customer";
  }

  public addCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.url,customer);
  }

  public getAllCustomers() : Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url);
  }

}
