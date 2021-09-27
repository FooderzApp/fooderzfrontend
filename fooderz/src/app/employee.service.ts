import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  deletePlayer(id: any) {
    throw new Error('Method not implemented.');
  }
  private url: string;
  constructor( private http:HttpClient) {
    this.url ="http://localhost:9500/employee";
   }
   public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, employee);
  }

  public deleteEmployee(employeeId: number):Observable<any> {
    return this.http.delete(this.url + `/${employeeId}`);  
  }

  public viewEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + `s`);
  }
}
