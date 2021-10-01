import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { getMaxListeners } from 'process';

import { EmployeeloginService } from './employeelogin.service';

describe('EmployeeloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeloginService = TestBed.get(EmployeeloginService);
    expect(service).toBeTruthy();
  });
});
describe('employeeloginservice',()=>{
  var http:HttpClient= http,//localhost:9500/employees;,

   service:EmployeeloginService;
beforeEach(()=>{service=new EmployeeloginService(http);});


it('#return value',(done:DoneFn)=>
{
  service.employeelogin("satishikkurthi5@gmail.com","123456").subscribe(value=>{
    expect(value).toBe(false);
    done();

  });

  
 
});

});
