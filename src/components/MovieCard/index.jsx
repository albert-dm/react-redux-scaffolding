import React from 'react';
import PropTypes from 'prop-types';
import './movieCard.scss';

import { MovieThumb } from '../MovieThumb';

const MovieCard = ({
  movie
}) => {
  return <div className="movie-card">
    <MovieThumb
      movie={movie}
    />
    <div>
      <p><b>Genre:</b> {movie.Genre}</p>
      <p><b>Released:</b> {movie.Released}</p>
      <p><b>Runtime:</b> {movie.Runtime}</p>
      <p><b>Plot:</b> {movie.Plot}</p>
    </div>
  </div>;
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export { MovieCard };

