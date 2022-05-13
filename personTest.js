"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var benito = new person_1.Person("Benito", 33, "Falsa");
benito.printName();
console.log(benito.yearOfBirth(2022));
console.log(benito.setAdress("flores"));
benito.getAdress();
