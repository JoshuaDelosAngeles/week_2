"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, adress, manager) {
        this.books = books;
        this.adress = adress;
        this.manager = manager;
    }
    Library.prototype.getAdress = function () {
        return this.adress;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setAdress = function (adress) {
        this.adress;
    };
    Library.prototype.setManager = function () {
        this.manager;
    };
    Library.prototype.printAllBooks = function () {
        console.log(this.books);
    };
    Library.prototype.getNumberBooks = function () {
        return this.books.length;
    };
    ;
    Library.prototype.findByAuthor = function (author) {
        var arrBooks = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() == author) {
                arrBooks.push(this.books[i]);
            }
        }
        return arrBooks;
    };
    return Library;
}());
exports.Library = Library;
