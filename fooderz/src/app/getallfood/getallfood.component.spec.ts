import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallfoodComponent } from './getallfood.component';

describe('GetallfoodComponent', () => {
  let component: GetallfoodComponent;
  let fixture: ComponentFixture<GetallfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
