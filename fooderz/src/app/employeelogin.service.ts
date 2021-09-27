import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeloginService {
   url:string;

  constructor(private http:HttpClient) { 
    this.url="http://localhost:9500/employees";
  }

  public employeelogin(email:string,password:string):Observable<any>
  {
    console.log("iam service")
    return this.http.get<any>(this.url+`/${email}`+`/${password}`)
  }
}
