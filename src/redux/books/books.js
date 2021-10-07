/* eslint-disable arrow-body-style */
import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const HANDLE_FETCH_ERROR = 'bookStore/books/HANDLE_FETCH_ERROR';
const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MAmyp1rEJRIDJCjdo3Id/books';

const initialState = {
  books: [],
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const getBooks = (books) => ({
  type: GET_BOOKS,
  payload: books,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  payload: bookId,
});

const handleFetchError = () => ({
  type: HANDLE_FETCH_ERROR,
});

export const fetchAddBook = (book) => async (dispatch) => {
  try {
    axios.post(apiURL, book).then(() => {
      dispatch(addBook(book));
    });
  } catch {
    dispatch(handleFetchError());
  }
};

export const fetchGetBooks = () => async (dispatch) => {
  try {
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
  } catch {
    dispatch(handleFetchError());
  }
};

export const fetchDeleteBook = (id) => async (dispatch) => {
  try {
    axios.delete(`${apiURL}/${id}`).then(() => {
      dispatch(removeBook(id));
    });
  } catch {
    dispatch(handleFetchError());
  }
};

const reducer = (state = initialState, action) => {
  let newArr = [];
  switch (action.type) {
    case GET_BOOKS:
      newArr = action.payload.slice();
      return { ...state, books: newArr };
    case ADD_BOOK:
      newArr = [...state.books, action.payload];
      return { ...state, books: newArr };
    case REMOVE_BOOK:
      newArr = state.books.filter((book) => book.item_id !== action.payload);
      return { ...state, books: newArr };
    case HANDLE_FETCH_ERROR:
      return state;
    default:
      return state;
  }
};

export default reducer;
