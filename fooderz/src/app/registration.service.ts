import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url:string;
  url1:string;
  constructor(private http: HttpClient) { 
    this.url="http://localhost:9500/register";
    this.url1="http://localhost:9500/login";

  }

  public loginCustomer(customer:Customer): Observable<any>{
    return this.http.post<any>(this.url1,customer);
  }

public registerCustomer(customer:Customer):Observable<any>{
  return this.http.post<any>(this.url,customer);
}

}
