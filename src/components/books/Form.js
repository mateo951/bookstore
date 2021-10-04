import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './form.module.css';

const genres = [
  'Adventure',
  'Horror',
  'Fiction',
  'Non-Fiction',
];

const Form = () => (
  <div className={style.formContainer}>
    <p>ADD NEW BOOK</p>
    <form>
      <input type="text" placeholder="Enter title of book" />
      <select>
        {
          genres.map((genre) => (
            <option key={uuidv4()} value={genre}>{genre}</option>
          ))
        }
      </select>
      <button type="button">Add Book</button>
    </form>
  </div>
);

export default Form;
