function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
function Library() {
    this.books = [];
}

Library.prototype.addBook = function (book) {
    this.books.push(book);
};

Library.prototype.removeBook = function (isbn) {
    const index = this.books.findIndex(book => book.isbn === isbn);
    if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ISBN ${isbn} removed successfully.`);
    } else {
        console.log(`Book with ISBN ${isbn} not found in the library.`);
    }
};


Library.prototype.displayBooks = function () {
    if (this.books.length === 0) {
        console.log("No books in the library.");
    } else {
        console.log("Books in the library:");
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`);
        });
    }
};

const bookLibrary = new Library();

const oopBook = new Book("Oop By Umais Jordan", "U.J", "123-456-89");
const dataStructureBook = new Book("Data Structures And Algo", "Danyal R.", "320-865-99");
const operatingSystemBook = new Book("Operating System And Networks", "Haider H.", "978-4343299-98");

bookLibrary.addBook(oopBook);
bookLibrary.addBook(dataStructureBook);
bookLibrary.addBook(operatingSystemBook);

bookLibrary.displayBooks();

bookLibrary.removeBook("978-0547928227");

bookLibrary.displayBooks();
