import React from 'react';
import style from './book.module.css';
import BookActions from './BookActions';

const book = ({ title, author, genre }) => (
  <li className={style.listItems}>
    <p>{title}</p>
    <p>{author}</p>
    <p>{genre}</p>
    <BookActions />
  </li>
);

export default book;
