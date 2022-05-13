import {Book} from "./books"
import { Library } from "./library"

let libreria= new Library([],"Palma","Joshua")
let libro1 = new Book("quijote",1000,456729,"Cervantes","anaya")
let libro2 = new Book ("Buscón",678,56978,"Quevedo","Everest")

console.log(libreria.getAdress())
console.log(libreria.getManager())
console.log(libreria.getNumberBooks())
console.log(libreria.printAllBooks())
console.log(libreria.findByAuthor("Cervantes"));

