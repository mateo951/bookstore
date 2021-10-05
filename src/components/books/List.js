import React from 'react';
import { useSelector } from 'react-redux';
import style from './list.module.css';
import Book from './Book';

const List = () => {
  const booksList = useSelector((state) => state.books);
  return (
    <div>
      <ul className={style.booksList}>
        {
          booksList.map((bookObj) => (
            <Book
              key={bookObj.id}
              id={bookObj.id}
              title={bookObj.title}
              author={bookObj.author}
              genre={bookObj.genre}
            />
          ))
        }
      </ul>
      <hr className={style.separation} />
    </div>
  );
};

export default List;
