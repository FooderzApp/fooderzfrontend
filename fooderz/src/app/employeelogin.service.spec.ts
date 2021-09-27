import { TestBed } from '@angular/core/testing';

import { EmployeeloginService } from './employeelogin.service';

describe('EmployeeloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeloginService = TestBed.get(EmployeeloginService);
    expect(service).toBeTruthy();
  });
});
