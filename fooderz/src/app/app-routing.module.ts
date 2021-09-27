import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddfoodComponent } from './addfood/addfood.component';
import { DeletefoodComponent } from './deletefood/deletefood.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { FoodComponent } from './food/food.component';
import { FooddashboardComponent } from './fooddashboard/fooddashboard.component';
import { GetallfoodComponent } from './getallfood/getallfood.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { LoginemployeeComponent } from './loginemployee/loginemployee.component';
import { SignupcustomerComponent } from './signupcustomer/signupcustomer.component';



const routes: Routes = [
  {path:'',redirectTo:'myfirst',pathMatch:'full'},
  {path:'loginemployee',component:LoginemployeeComponent},
  {path:'myfirst' , component:FirstpageComponent},
  {path:'logincustomer', component:LogincustomerComponent},
  {path:"signupcustomer", component:SignupcustomerComponent},
  {path:"employeedashboard",component:EmployeedashboardComponent},
  {path:"fooddashboard",component:FooddashboardComponent},
  {path:"addfood",component:AddfoodComponent},
  {path:"deletefood",component:DeletefoodComponent},
  {path:"viewfooditems",component:GetallfoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
