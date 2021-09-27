import { TestBed } from '@angular/core/testing';

import { FoodcrudService } from './foodcrud.service';

describe('FoodcrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodcrudService = TestBed.get(FoodcrudService);
    expect(service).toBeTruthy();
  });
});
