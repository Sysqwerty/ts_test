// Практика
class Book {
    constructor(title, author, isBorrowed = false) {
        this.title = title;
        this.author = author;
        this.isBorrowed = isBorrowed;
    }
    set isBorrowedBook(status) {
        this.isBorrowed = status;
    }
    get isBorrowedBook() {
        return this.isBorrowed;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    add(book) {
        this.books.push(book);
    }
    borrowBook(title) {
        const currentBook = this.books.find(({ title: bookTitle }) => bookTitle === title);
        if (currentBook)
            currentBook.isBorrowedBook = true;
    }
    getBorrowedBooks() {
        return this.books.filter((book) => book.isBorrowedBook);
    }
    getAvailableBooks() {
        return this.books.filter((book) => !book.isBorrowedBook);
    }
}
const HarryPotter = new Book("HarryPotter", "Joan Rouling");
const HarryPotter1 = new Book("HarryPotter1", "Joan Rouling");
const HarryPotter2 = new Book("HarryPotter2", "Joan Rouling");
const HarryPotter3 = new Book("HarryPotter3", "Joan Rouling");
const library = new Library();
library.add(HarryPotter);
library.add(HarryPotter1);
library.add(HarryPotter2);
library.add(HarryPotter3);
library.borrowBook("HarryPotter");
console.log("Library: ", library);
console.log("Borrowed books: ", library.getBorrowedBooks());
console.log("Awailable books: ", library.getAvailableBooks());
//# sourceMappingURL=practice_generics.js.map