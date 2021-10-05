import React from 'react';
import PropTypes from 'prop-types';
import style from './book.module.css';
import BookActions from './BookActions';

const Book = ({
  id, title, author, genre,
}) => (
  <li className={style.listItems}>
    <p className={style.hideId}>{id}</p>
    <p>{title}</p>
    <p>{author}</p>
    <p>{genre}</p>
    <BookActions id={id} />
  </li>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default Book;
