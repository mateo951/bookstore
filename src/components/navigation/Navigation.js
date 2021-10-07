import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './nav.module.css';

const Navigation = () => (
  <nav className={style.navContainer}>
    <NavLink to="/" style={{ textDecoration: 'none' }} exact>
      <h1 className={style.title}>Bookstore CMS</h1>
    </NavLink>
    <ul className={style.navlinks}>
      <NavLink to="/" className={style.listitems} exact>
        BOOKS
      </NavLink>
      <NavLink to="/categories" className={style.listitems} exact>
        CATEGORIES
      </NavLink>
    </ul>
    <li className={style.oval}><img className={style.user} src="https://img.icons8.com/material-rounded/24/4a90e2/user.png" alt="" /></li>
  </nav>
);

export default Navigation;
