import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginemployeeComponent } from './loginemployee/loginemployee.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { HttpClientModule } from '@angular/common/http';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { SignupcustomerComponent } from './signupcustomer/signupcustomer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginemployeeComponent,
    FirstpageComponent,
    LogincustomerComponent,
    SignupcustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
