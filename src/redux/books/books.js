const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});
export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK: {
      const { bookId } = action;
      return state.filter((book) => book.id !== bookId);
    }
    default:
      return state;
  }
};

export default reducer;
