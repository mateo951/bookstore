/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDeleteBook } from '../../redux/books/books';

const BookActions = ({ item_id }) => {
  const dispatch = useDispatch();
  const removeBookFromStore = (bookId) => {
    dispatch(fetchDeleteBook(bookId));
  };
  return (
    <div>
      <button type="button">Comment</button>
      <button type="button" onClick={() => removeBookFromStore(item_id)}>Remove</button>
      <button type="button">Edit</button>
    </div>
  );
};

BookActions.propTypes = {
  item_id: PropTypes.string.isRequired,
};

export default BookActions;
