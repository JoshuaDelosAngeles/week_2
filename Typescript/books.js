"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, npages, isbn, author, editorial) {
        this.title = title;
        this.npages = npages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getNpages = function () {
        return this.npages;
    };
    Book.prototype.getIsbn = function () {
        return this.npages;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setTitle = function (title) {
        this.title;
    };
    Book.prototype.setNpages = function (npages) {
        this.npages;
    };
    Book.prototype.setIsbn = function (isbn) {
        this.isbn;
    };
    Book.prototype.setAuthor = function (author) {
        this.author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial;
    };
    Book.prototype.printString = function () {
        console.log(this.title);
        console.log(this.npages);
        console.log(this.isbn);
        console.log(this.author);
        console.log(this.editorial);
    };
    return Book;
}());
exports.Book = Book;
