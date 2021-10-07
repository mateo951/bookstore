/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import style from './book.module.css';
import BookActions from './BookActions';

const percentage = 66;

const Book = ({
  item_id, title, category,
}) => (
  <li className={style.listItems}>
    <div className={style.divWidth}>
      <p className={style.category}>{category}</p>
      <p className={style.title}>{title}</p>
      <p className={style.author}>Author</p>
      <BookActions className={style.actions} item_id={item_id} />
    </div>
    <div className={style.divProgres}>
      <p className={style.hideId}>{item_id}</p>
      <CircularProgressbar className={style.CircularProgressbar} value={percentage} />
      <div className={style.divProgresDetail}>
        <p className={style.percentComplete}>{`${percentage}%`}</p>
        <p className={style.completedText}>Completed</p>
      </div>
    </div>
    <div className={style.lineseparator} />
    <div className={style.progressDetail}>
      <p className={style.currentChapter}>CURRENT CHAPTER</p>
      <p className={style.currentLesson}>Chapter 17</p>
      <button className={style.buttonProgress} type="button">UPDATE PROGRESS</button>
    </div>
  </li>
);

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
