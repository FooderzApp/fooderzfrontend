import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { LoginemployeeComponent } from './loginemployee/loginemployee.component';
import { SignupcustomerComponent } from './signupcustomer/signupcustomer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';



const routes: Routes = [
  {path:'',redirectTo:'myfirst',pathMatch:'full'},
  {path:'loginemployee',component:LoginemployeeComponent},
  {path:'myfirst' , component:FirstpageComponent},
  {path:'logincustomer', component:LogincustomerComponent},
  {path:"signupcustomer", component:SignupcustomerComponent},
  {path:"viewcustomer",component:ViewCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
