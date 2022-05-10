let {Person} = require("./person")

class Contact{
    constructor()
    {
        this.agenda=[];

    }
    
    printPerson(){
    console.log(this.agenda);
    }

    printAll(){
        console.log(this.agenda);
    }
}


 let persona1 = new Person("Pepe","Martín")
 let persona2 = new Person("Mario","Ruíz")
 let contactos = new Contact()
contactos.agenda.push(persona1,persona2)
//contactos.agenda.printAll()
console.log(contactos.agenda);

module.exports={Contacts}

class Contacts {
    constructor(){
            this.contacto = [];
    }
    printPersons(){
       console.log(this.contacto);
    }
}

let jorge = new Person();
let maria = new Person();


let conjunto = new Contacts();
conjunto.contacto.push(jorge, maria);

console.log("Reto 7");
conjunto.printPersons();

console.log("Reto 8");