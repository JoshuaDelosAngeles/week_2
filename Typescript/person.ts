export class Person {
    public name : string;
    public age : number;
    private adress: string;
 constructor(name : string , age : number , adress :string){
     this.name = name
     this.age = age
     this.adress = adress
 };

 public printName():void{
     console.log(this.name);
     
 }
 public yearOfBirth(CurrenYear:number){
     return CurrenYear-this.age
 };
 public setAdress(adress:string){

 return this.adress = adress


 };
 public getAdress():void{
     console.log(this.adress)
 }

}
