import React from 'react';
import style from './list.module.css';
import Book from './Book';

const demoBooks = [
  { title: 'The Fellowship of the Ring', author: 'J. R. R. Tolkien', genre: 'Adventure' },
  { title: 'The Two Towers', author: 'J. R. R. Tolkien', genre: 'Adventure' },
  { title: 'The Return of the King', author: 'J. R. R. Tolkien', genre: 'Adventure' },
];

const List = () => (
  <>
    <ul className={style.booksList}>
      {
      demoBooks.map((bookObj) => (
        <Book
          key={bookObj.id}
          title={bookObj.title}
          author={bookObj.author}
          genre={bookObj.genre}
        />
      ))
    }
    </ul>
    <hr className={style.separation} />
  </>
);

export default List;
