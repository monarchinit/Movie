import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from './moviePageComponent.module.css';

const MoviePageComponent = ({
  poster_path,
  title,
  name,
  popularity,
  overview,
  genres,
  id,
  onGoBack,
}) => {
  return (
    <>
      <div className={styled.box}>
        <div className={styled.imageBox}>
          <button className={styled.button} type="button" onClick={onGoBack}>
            Back
          </button>
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt="title"
          />
        </div>
        <div>
          <h2 className={styled.title}>{title ? title : name}</h2>
          <p>Use score : {Math.ceil(popularity)}%</p>
          <h3 className={styled.text}>Overview</h3>
          <p>{overview}</p>
          <h3 className={styled.text}>Genres</h3>
          <ul>
            {genres.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <div>
            <p className={styled.text}>Additional information</p>
            <ul>
              <li>
                <NavLink className={styled.text} to={`/movies/${id}/cast`}>
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink className={styled.text} to={`/movies/${id}/reviews`}>
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePageComponent;

MoviePageComponent.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
  popularity: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

//   poster_path, title, name,popularity,overview,genres
