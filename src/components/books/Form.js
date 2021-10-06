/* eslint-disable camelcase */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import style from './form.module.css';
import { addBook } from '../../redux/books/books';

const categories = [
  'Adventure',
  'Horror',
  'Fiction',
  'Non-Fiction',
];

const Form = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    title: '',
    category: 'Adventure',
  });

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitBookToStore = () => {
    const item_id = uuidv4();
    const { title, category } = state;
    const newBook = {
      item_id,
      title,
      category,
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
        <select name="category" value={state.category} onChange={handleChange}>
          {
            categories.map((category) => (
              <option key={uuidv4()} value={category}>{category}</option>
            ))
          }
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
