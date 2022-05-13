import{Book} from "./books"

export class Library
{
    private books : Book[]
    private adress: string
    private manager : string
    constructor(books:[],adress:string,manager:string){
        this.books = books
        this.adress = adress
        this.manager = manager
    }
    public getAdress(){
        return this.adress
    }
    public getManager(){
        return this.manager
    }
    public setAdress(adress:string){
        this.adress
    }
    public setManager(){
        this.manager
    }
    public printAllBooks():void{
        console.log(this.books)
    }
    public getNumberBooks(){
    return this.books.length

    };
    public findByAuthor(author:string):Book[]{
 let arrBooks: Book[]=[]
 for(let i =0 ; i< this.books.length;i++){
     if(this.books[i].getAuthor()== author){
        arrBooks.push(this.books[i])
     }
    
     
 }
  return arrBooks
    }
}
