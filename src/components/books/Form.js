import React from 'react';
import style from './form.module.css';

const Form = () => (
  <div className={style.formContainer}>
    <p>ADD NEW BOOK</p>
    <form>
      <input type="text" placeholder="Enter title of book" />
      <select>
        <option value="Adventure">Adventure</option>
        <option value="Horror">Horror</option>
        <option selected value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
      </select>
      <button type="button">Add Book</button>
    </form>
  </div>
);

export default Form;
