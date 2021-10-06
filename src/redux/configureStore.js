import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducer = combineReducers({
  books: booksReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
/* eslint-enable */

export default store;
