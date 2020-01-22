import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from './listMoviesTrending.module.css';

const ListMoviesTrending = ({ items, location }) => {
  return (
    <ul>
      {items.length > 0 ? (
        items.map(item => (
          <li className={styled.item} key={item.id}>
            <NavLink
              className={styled.link}
              to={{ pathname: `/movies/${item.id}`, state: { from: location } }}
            >
              {item.title ? item.title : item.name}
            </NavLink>
          </li>
        ))
      ) : (
        <h2>Not Found</h2>
      )}
    </ul>
  );
};

export default withRouter(ListMoviesTrending);

ListMoviesTrending.propTypes = {
  items: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
