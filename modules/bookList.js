import Book from './Book.js';

export default class BookList {
  constructor() {
    this.Books = [];
    if (localStorage.getItem('BookList') !== null) {
      this.Books = JSON.parse(localStorage.getItem('BookList'));
    }
  }

  AddBook(Title, Author) {
    if (Title !== '' && Author !== '') {
      const Book = {
        Title,
        Author,
      };
      this.Books.push(Book);
    }
  }

  RemoveBook(index) {
    if (index > -1) {
      this.Books.splice(index, 1);
    }
  }
}
