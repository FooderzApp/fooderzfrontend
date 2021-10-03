import { Customer } from "./customer";
import { Food } from "./food";

export class Cart {
    cartId:number;

    customer:Customer;
    foods:Food;

    customer:{
        "customerId":number,
    };
    foodList:{
        "foodId":number,
        "foodName": string,
        "price": number,
        "avatar": string
    };

}
