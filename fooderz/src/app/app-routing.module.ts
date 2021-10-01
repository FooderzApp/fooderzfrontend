import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddfoodComponent } from './addfood/addfood.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { FooddashboardComponent } from './fooddashboard/fooddashboard.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { LoginemployeeComponent } from './loginemployee/loginemployee.component';
import { SignupcustomerComponent } from './signupcustomer/signupcustomer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { ViewfooditemsComponent } from './viewfooditems/viewfooditems.component';



const routes: Routes = [
  {path:'',redirectTo:'myfirst',pathMatch:'full'},
  {path:'loginemployee',component:LoginemployeeComponent},
  {path:'myfirst' , component:FirstpageComponent},
  {path:'logincustomer', component:LogincustomerComponent},
  {path:"signupcustomer", component:SignupcustomerComponent},
  {path:"viewcustomer",component:ViewCustomerComponent},
  {path:"employeedashboard",component:EmployeedashboardComponent},
  {path:"addfood",component:AddfoodComponent},
  {path:"fooddashboard",component:FooddashboardComponent},
  {path:"viewfooditems",component:ViewfooditemsComponent},
  {path:"viewcart",component:ViewcartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
