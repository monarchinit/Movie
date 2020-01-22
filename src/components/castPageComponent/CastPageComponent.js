import React from 'react';
import PropTypes from 'prop-types';
import styled from './castPageComponent.module.css';

const ReviewsPageComponent = ({ profile_path, name, character }) => {
  return (
    <>
      <li className={styled.item}>
        <img
          src={`https://image.tmdb.org/t/p/w200${profile_path}`}
          alt={name}
        />
        <h3>{name}</h3>
        <p>character:{character}</p>
      </li>
    </>
  );
};

export default ReviewsPageComponent;

ReviewsPageComponent.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
