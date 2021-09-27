import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginemployeeComponent } from './loginemployee/loginemployee.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { HttpClientModule } from '@angular/common/http';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { SignupcustomerComponent } from './signupcustomer/signupcustomer.component';
import { CustomerComponent } from './customer/customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { FoodComponent } from './food/food.component';
import { ViewFoodComponent } from './view-food/view-food.component';
import { CustomerService } from './customer.service';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeService } from './employee.service';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { FooddashboardComponent } from './fooddashboard/fooddashboard.component';
import { ViewfooditemsComponent } from './viewfooditems/viewfooditems.component';
import { EmployeecrudsComponent } from './employeecruds/employeecruds.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginemployeeComponent,
    FirstpageComponent,
    LogincustomerComponent,
    SignupcustomerComponent,
    CustomerComponent,
    ViewCustomerComponent,
    FoodComponent,
    ViewFoodComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    DeleteEmployeeComponent,
    EmployeedashboardComponent,
    AddfoodComponent,
    FooddashboardComponent,
    ViewfooditemsComponent,
    EmployeecrudsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
