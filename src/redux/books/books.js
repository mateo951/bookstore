/* eslint-disable arrow-body-style */
import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MAmyp1rEJRIDJCjdo3Id/books';

const initialState = {
  books: [],
};

export const getBooks = (books) => ({
  type: GET_BOOKS,
  payload: books,
});

export const fetchBooks = () => (dispatch) => {
  axios.get(apiURL)
    .then((response) => {
      const books = [];
      const { data } = response;
      Object.entries(data).forEach(([key, value]) => {
        const id = key;
        const bookInfo = value[0];
        const book = {
          item_id: id,
          title: bookInfo.title,
          category: bookInfo.category,
        };
        books.push(book);
      });
      dispatch(getBooks(books));
    });
};
const postBook = (book) => {
  axios.post(apiURL, book).then(() => {
    console.log('Posted book');
  });
};

const deleteBook = (id) => {
  axios.delete(`${apiURL}/${id}`);
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  payload: bookId,
});

const reducer = (state = initialState, action) => {
  let newArr = [];
  switch (action.type) {
    case GET_BOOKS:
      newArr = action.payload.slice();
      return { ...state, books: newArr };
    case ADD_BOOK:
      newArr = [...state.books, action.payload];
      postBook(action.payload);
      return { ...state, books: newArr };
    case REMOVE_BOOK:
      newArr = state.books.filter((book) => book.item_id !== action.payload);
      deleteBook(action.payload);
      return { ...state, books: newArr };
    default:
      return state;
  }
};

export default reducer;
