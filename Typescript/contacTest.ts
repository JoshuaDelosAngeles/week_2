import {Contacts} from "./contacts"
import { Person } from "../person"

let agenda = new Contacts()
let persona1 = new Person("Pepito",25,"Palma")
let persona2= new Person("Juanito",34,"Bernabeu")

agenda.people=[persona1,persona2]
agenda.printCalendar()


