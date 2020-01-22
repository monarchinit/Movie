import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from './navigator.module.css';

// const activeStyle = { color: 'palevioletred', 'text-decoration': 'none' };

const Navigation = () => (
  <ul className={styled.list}>
    <li className={styled.list.item}>
      <NavLink
        exact
        className={styled.link}
        activeClassName={styled.activeLink}
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li className={styled.list.item}>
      <NavLink
        className={styled.link}
        activeClassName={styled.activeLink}
        to="/movies"
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
