let {Person} = require("./person")

class Contact{
    constructor()
    {
        this.agenda=[];

    }
    
      printPerson(){
    console.log(this.agenda);
    }

   
}


 let persona1 = new Person("Pepe","Martín")
 let persona2 = new Person("Mario","Ruíz")
 let contactos = new Contact()
contactos.agenda.push(persona1,persona2)
contactos.agenda.printPerson()
console.log(contactos.agenda);