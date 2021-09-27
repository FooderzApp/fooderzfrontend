import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddashboardComponent } from './fooddashboard.component';

describe('FooddashboardComponent', () => {
  let component: FooddashboardComponent;
  let fixture: ComponentFixture<FooddashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooddashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
