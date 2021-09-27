import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url:string;
   

  constructor(private https:HttpClient) { 
    this.url="http://localhost:9500/employees";
             }



    public employeeLogin (employeeEmail:string,employeePassword:string): Observable<any>
    {
      return this.https.post<any>(this.url+"/employeeEmail"+"/employeePassword",Employee)

    }
              
  }

