import BookList from './modules/bookList.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

const bList = new BookList();
const bookTitle = document.getElementById('bookTilte');
const bookAuthor = document.getElementById('bookAuthor');
const btnAdd = document.getElementById('Add');
const showList = document.getElementById('showList');
const showBook = document.getElementById('bookList');
const addBook = document.getElementById('addBook');
const contact = document.getElementById('contact');
const showAdd = document.getElementById('showAdd');
const showCon = document.getElementById('showCon');
const time = document.getElementById('time');

const showBooks = () => {
  showBook.classList.remove('Invisible');
  showBook.classList.add('visible');
  showList.classList.add('colBlue');

  if (addBook.classList.contains('visible')) {
    addBook.classList.remove('visible');
    addBook.classList.add('Invisible');
    showAdd.classList.remove('colBlue');
  }
  if (contact.classList.contains('visible')) {
    contact.classList.remove('visible');
    contact.classList.add('Invisible');
    showAdd.classList.remove('colBlue');
  }
};

const AddShow = () => {
  addBook.classList.remove('Invisible');
  addBook.classList.add('visible');
  showAdd.classList.add('colBlue');

  if (showBook.classList.contains('visible')) {
    showBook.classList.remove('visible');
    showBook.classList.add('Invisible');
    showList.classList.remove('colBlue');
  }
  if (contact.classList.contains('visible')) {
    contact.classList.remove('visible');
    contact.classList.add('Invisible');
    showCon.classList.remove('colBlue');
  }
};

const showContact = () => {
  contact.classList.remove('Invisible');
  contact.classList.add('visible');
  showCon.classList.add('colBlue');

  if (showBook.classList.contains('visible')) {
    showBook.classList.remove('visible');
    showBook.classList.add('Invisible');
    showList.classList.remove('colBlue');
  }
  if (addBook.classList.contains('visible')) {
    addBook.classList.remove('visible');
    addBook.classList.add('Invisible');
    showAdd.classList.remove('colBlue');
  }
};

const Add = () => {
  if (bookTitle.value !== '' && bookAuthor.value !== '') {
    bList.AddBook(bookTitle.value, bookAuthor.value);
    localStorage.setItem('BookList', JSON.stringify(bList.Books));
    window.location.reload();
  }
};

const Remove = () => {
  if (this.id > -1) {
    bList.RemoveBook(this.id);
    localStorage.setItem('BookList', JSON.stringify(bList.Books));
    window.location.reload();
  }
};

const displayBooks = () => {
  if (bList.Books.length >= 1) {
    bList.Books.map((el, i) => {
      const BookSec = document.getElementById('bookSec');
      if (i === 0) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('borderT');
        const col = document.createElement('div');
        col.classList.add('col-6');
        col.classList.add('text-left');
        const h5 = document.createElement('h5');
        h5.classList.add('m-2');
        h5.textContent = `'${el.title}' by ${el.author}`;
        col.appendChild(h5);
        const col2 = document.createElement('div');
        col2.classList.add('col-6');
        col2.classList.add('text-end');
        const input = document.createElement('input');
        input.classList.add('m-2');
        input.type = 'submit';
        input.value = 'Remove';
        input.id = i;
        input.addEventListener('click', Remove);
        col2.appendChild(input);
        row.appendChild(col);
        row.appendChild(col2);
        BookSec.appendChild(row);

        return null;
      }
      if (i === bList.Books.length - 1 && i % 2 !== 0) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('borderBW');
        const col = document.createElement('div');
        col.classList.add('col-6');
        col.classList.add('text-left');
        const h5 = document.createElement('h5');
        h5.classList.add('m-2');
        h5.textContent = `'${el.title}' by ${el.author}`;
        col.appendChild(h5);
        const col2 = document.createElement('div');
        col2.classList.add('col-6');
        col2.classList.add('text-end');
        const input = document.createElement('input');
        input.classList.add('m-2');
        input.type = 'submit';
        input.value = 'Remove';
        input.id = i;
        input.addEventListener('click', Remove);
        col2.appendChild(input);
        row.appendChild(col);
        row.appendChild(col2);
        BookSec.appendChild(row);
        return null;
      }
      if (i === bList.Books.length - 1 && i % 2 === 0) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('borderB');
        const col = document.createElement('div');
        col.classList.add('col-6');
        col.classList.add('text-left');
        const h5 = document.createElement('h5');
        h5.classList.add('m-2');
        h5.textContent = `'${el.title}' by ${el.author}`;
        col.appendChild(h5);
        const col2 = document.createElement('div');
        col2.classList.add('col-6');
        col2.classList.add('text-end');
        const input = document.createElement('input');
        input.classList.add('m-2');
        input.value = 'Remove';
        input.type = 'submit';
        input.id = i;
        input.addEventListener('click', Remove);
        col2.appendChild(input);
        row.appendChild(col);
        row.appendChild(col2);
        BookSec.appendChild(row);
        return null;
      }
      if (i % 2 !== 0) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('borderMW');
        const col = document.createElement('div');
        col.classList.add('col-6');
        col.classList.add('text-left');
        const h5 = document.createElement('h5');
        h5.classList.add('m-2');
        h5.textContent = `'${el.title}' by ${el.author}`;
        col.appendChild(h5);
        const col2 = document.createElement('div');
        col2.classList.add('col-6');
        col2.classList.add('text-end');
        const input = document.createElement('input');
        input.classList.add('m-2');
        input.type = 'submit';
        input.value = 'Remove';
        input.id = i;
        input.addEventListener('click', Remove);
        col2.appendChild(input);
        row.appendChild(col);
        row.appendChild(col2);
        BookSec.appendChild(row);
      } else {
        const row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('borderM');
        const col = document.createElement('div');
        col.classList.add('col-6');
        col.classList.add('text-left');
        const h5 = document.createElement('h5');
        h5.classList.add('m-2');
        h5.textContent = `'${el.title}' by ${el.author}`;
        col.appendChild(h5);
        const col2 = document.createElement('div');
        col2.classList.add('col-6');
        col2.classList.add('text-end');
        const input = document.createElement('input');
        input.classList.add('m-2');
        input.value = 'Remove';
        input.type = 'submit';
        input.id = i;
        input.addEventListener('click', Remove);
        col2.appendChild(input);
        row.appendChild(col);
        row.appendChild(col2);
        BookSec.appendChild(row);
        return null;
      }

      return null;
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  showList.addEventListener('click', showBooks);
  showCon.addEventListener('click', showContact);
  showAdd.addEventListener('click', AddShow);
  btnAdd.addEventListener('click', Add);
  if (bList.Books !== null) {
    displayBooks();
  }
  time.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
});
