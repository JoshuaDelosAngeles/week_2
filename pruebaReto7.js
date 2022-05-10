let {Person} = require("./person")
let {Contacts} = require("./reto7")

let contactos = new Contacts
let persona1= new Person ("Benito","Camela")
let persona2 = new Person ("Pepe","Matín")

contactos.agenda.push(persona1,persona2)
contactos.agenda.printPerson()