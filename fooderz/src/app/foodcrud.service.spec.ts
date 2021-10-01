import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Food } from './food';

import { FoodcrudService } from './foodcrud.service';

describe('FoodcrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodcrudService = TestBed.get(FoodcrudService);
    expect(service).toBeTruthy();
  });
});
describe('addfood',()=>{
  var food:Food;
  food.foodName="biryani";
  food.price=400;
  food.avatar="https://thumbs.dreamstime.com/b/chicken-biryani-traditional-indian-rice-dish-served-clay-pot-top-view-image-one-meal-108805407.jpg";

 var http:HttpClient = http,//localhost:9500/employees;
 service:FoodcrudService;
  

  beforeEach(()=>{service = new FoodcrudService(http) ;});

  
it('#return value',(done:DoneFn)=>
{
  service.addFood(food).subscribe(value=>{
    expect(value).toBe(food);
    done();

  });




});
