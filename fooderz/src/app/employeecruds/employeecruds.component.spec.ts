import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecrudsComponent } from './employeecruds.component';

describe('EmployeecrudsComponent', () => {
  let component: EmployeecrudsComponent;
  let fixture: ComponentFixture<EmployeecrudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeecrudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeecrudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
