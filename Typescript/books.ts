 export class Book
{
   private title :string;
   private npages:number;
   private isbn:number;
   private author: string;
   private editorial : string
   constructor(title:string,npages:number,isbn:number,author:string,editorial:string){
       this.title = title
       this.npages= npages
       this.isbn = isbn 
       this.author= author
       this.editorial=editorial
   }
   public getTitle(){
       return this.title
   }

   public getNpages(){
       return this.npages
   }
   public getIsbn(){
       return this.npages
   }
   public getAuthor(){
       return this.author
   }
   public getEditorial(){
       return this.editorial
   }
   public setTitle(title:string){
     this.title
   }
   public setNpages(npages:number){
       this.npages
   }
   public setIsbn(isbn:number){
       this.isbn
   }
   public setAuthor(author:string){
       this.author
   }
   public setEditorial(editorial:string){
       this.editorial
   }
   public printString():void{
       console.log(this.title);
       console.log(this.npages);
       console.log(this.isbn);
       console.log(this.author);
       console.log(this.editorial)
       
   }
}