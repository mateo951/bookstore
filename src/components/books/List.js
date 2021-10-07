import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './list.module.css';
import Book from './Book';
import { fetchGetBooks } from '../../redux/books/books';

const List = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetBooks());
  }, []);
  const { books } = useSelector((state) => state.books);
  return (
    <div>
      <ul className={style.booksList}>
        {
          books.map((bookObj) => (
            <Book
              key={bookObj.item_id}
              item_id={bookObj.item_id}
              title={bookObj.title}
              category={bookObj.category}
            />
          ))
        }
      </ul>
      <hr className={style.separation} />
    </div>
  );
};

export default List;
