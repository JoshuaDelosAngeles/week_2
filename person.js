"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, adress) {
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
    ;
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfBirth = function (CurrenYear) {
        return CurrenYear - this.age;
    };
    ;
    Person.prototype.setAdress = function (adress) {
        return this.adress = adress;
    };
    ;
    Person.prototype.getAdress = function () {
        console.log(this.adress);
    };
    return Person;
}());
exports.Person = Person;
