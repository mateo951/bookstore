import React from 'react';
import style from './book.module.css';

const book = ({ title, author, genre }) => (
  <li className={style.listItems}>
    <p>{title}</p>
    <p>{author}</p>
    <p>{genre}</p>
  </li>
);

export default book;
