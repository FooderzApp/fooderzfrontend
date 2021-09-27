export class Food {

    public foodId:number;
	private  foodName:string;
	private  price:number;
	private avatar:string;
	public getid():number
	{
		return this.foodId;
	}
	public setid(id:number):void
{
	this.foodId=id;
}    
	
}
