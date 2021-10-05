const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (newBook) => ({
  type: ADD_BOOK,
  newBook,
});
export const removeBook = (removeBookId) => ({
  type: REMOVE_BOOK,
  removeBookId,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.newBook];
    case REMOVE_BOOK: {
      const { removeBookId } = action;
      return state.filter((newBook) => newBook.id !== removeBookId);
    }
    default:
      return state;
  }
};

export default reducer;
