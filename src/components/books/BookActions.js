/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './bookActions.module.css';
import { fetchDeleteBook } from '../../redux/books/books';

const BookActions = ({ item_id }) => {
  const dispatch = useDispatch();
  const removeBookFromStore = (bookId) => {
    dispatch(fetchDeleteBook(bookId));
  };
  return (
    <div className={style.divMargin}>
      <button className={style.actions} type="button">Comment</button>
      <div className={style.lineseparator} />
      <button className={style.actions} type="button" onClick={() => removeBookFromStore(item_id)}>Remove</button>
      <div className={style.lineseparator} />
      <button className={style.actions} type="button">Edit</button>
    </div>
  );
};

BookActions.propTypes = {
  item_id: PropTypes.string.isRequired,
};

export default BookActions;
