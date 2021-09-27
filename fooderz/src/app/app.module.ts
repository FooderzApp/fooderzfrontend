import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginemployeeComponent } from './loginemployee/loginemployee.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { HttpClientModule } from '@angular/common/http';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { SignupcustomerComponent } from './signupcustomer/signupcustomer.component';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { FoodComponent } from './food/food.component';
import { FooddashboardComponent } from './fooddashboard/fooddashboard.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { DeletefoodComponent } from './deletefood/deletefood.component';
import { GetallfoodComponent } from './getallfood/getallfood.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginemployeeComponent,
    FirstpageComponent,
    LogincustomerComponent,
    SignupcustomerComponent,
    EmployeedashboardComponent,
    FoodComponent,
    FooddashboardComponent,
    AddfoodComponent,
    DeletefoodComponent,
    GetallfoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
