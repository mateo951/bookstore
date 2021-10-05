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
  const [state, setState] = React.useState({
    title: '',
    author: '',
    genre: '',
  });

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitBookToStore = () => {
    const id = uuidv4();
    const { title, author, genre } = state;
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
        submitBookToStore();
      }}
      >
        <input type="text" value={state.title} name="title" onChange={handleChange} placeholder="Enter title of book" required />
        <input type="text" value={state.author} name="author" onChange={handleChange} placeholder="Enter author of book" required />
        <select name="genre" value={state.genre} onChange={handleChange}>
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
