/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import style from './book.module.css';
import BookActions from './BookActions';

const Book = ({
  item_id, title, category,
}) => (
  <li className={style.listItems}>
    <p className={style.hideId}>{item_id}</p>
    <p>{title}</p>
    <p>Author</p>
    <p>{category}</p>
    <BookActions item_id={item_id} />
  </li>
);

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
