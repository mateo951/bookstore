import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import style from './form.module.css';
import { addBook } from '../../redux/books/books';

const genres = [
  'Adventure',
  'Horror',
  'Fiction',
  'Non-Fiction',
];

const Form = () => {
  const dispatch = useDispatch();
  const submitBookToStore = (e) => {
    const id = uuidv4();
    const title = e[0].value;
    const author = e[1].value;
    const genre = e[2].value;
    const newBook = {
      id,
      title,
      author,
      genre,
    };
    dispatch(addBook(newBook));
  };
  return (
    <div className={style.formContainer}>
      <p>ADD NEW BOOK</p>
      <form onSubmit={(e) => {
        e.preventDefault();
        submitBookToStore(e.target);
      }}
      >
        <input type="text" placeholder="Enter title of book" required />
        <input type="text" placeholder="Enter author of book" required />
        <select name="genre">
          {
            genres.map((genre) => (
              <option key={uuidv4()} value={genre}>{genre}</option>
            ))
          }
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
