import React from 'react';
import PropTypes from 'prop-types';

const ReviewsPageComponent = ({ author, content }) => {
  return (
    <>
      <li>
        <h3>{author}</h3>
        <p>{content}</p>
      </li>
    </>
  );
};

export default ReviewsPageComponent;

ReviewsPageComponent.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
