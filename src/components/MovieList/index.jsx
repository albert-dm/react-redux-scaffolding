import React from 'react';
import PropTypes from 'prop-types';
import './movieList.scss';

import { MovieThumb } from '../MovieThumb';

const MovieList = ({
  movies,
  selectMovie,
}) => {
  return <div className="movie-list">
    {
      movies.map(
        movie => <MovieThumb key={movie.imdbId} movie={movie} action={selectMovie} />
      )
    }
  </div>;
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectMovie: PropTypes.func,
};

export { MovieList };

