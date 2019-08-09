import React from 'react';
import PropTypes from 'prop-types';
import './movieCard.scss';

import { MovieThumb } from '../MovieThumb';
import { Paper } from 'react-md';

const MovieCard = ({
  movie
}) => {
  return <div className="movie-card">
    <MovieThumb
      movie={movie}
    />
    <Paper>
      {
        JSON.stringify(movie)
      }
    </Paper>
  </div>;
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export { MovieCard };

