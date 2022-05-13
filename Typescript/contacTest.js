"use strict";
exports.__esModule = true;
var contacts_1 = require("./contacts");
var person_1 = require("../person");
var agenda = new contacts_1.Contacts();
var persona1 = new person_1.Person("Pepito", 25, "Palma");
var persona2 = new person_1.Person("Juanito", 34, "Bernabeu");
agenda.people = [persona1, persona2];
agenda.printCalendar();
