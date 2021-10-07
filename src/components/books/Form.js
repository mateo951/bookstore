/* eslint-disable camelcase */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import style from './form.module.css';
import { fetchAddBook } from '../../redux/books/books';

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
    dispatch(fetchAddBook(newBook));
  };

  return (
    <div className={style.formContainer}>
      <p className={style.title}>ADD NEW BOOK</p>
      <form onSubmit={(e) => {
        e.preventDefault();
        submitBookToStore();
      }}
      >
        <input max={30} className={style.lessonPanel} type="text" value={state.title} name="title" onChange={handleChange} placeholder="Book Title" required />
        <select className={style.lessonPanel2} name="category" value={state.category} onChange={handleChange}>
          {
            categories.map((category) => (
              <option key={uuidv4()} value={category}>{category}</option>
            ))
          }
        </select>
        <button className={style.submitButton} type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
