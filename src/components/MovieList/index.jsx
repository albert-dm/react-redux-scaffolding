import React from 'react';
import PropTypes from 'prop-types';
import './movieList.scss';

import { MovieThumb } from '../MovieThumb';
import { MovieCard } from '../MovieCard';

const MovieList = ({
  movies,
  selectMovie,
  selectedMovie,
}) => {
  return <div className="movie-list">
    {
      movies.map(
        movie => selectedMovie && movie.imdbID === selectedMovie.imdbID
          ?
          <MovieCard movie={movie} />
          :
          <MovieThumb onClick={() => selectMovie(movie)} key={movie.imdbID} movie={movie} action={selectMovie} />
      )
    }
  </div>;
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectMovie: PropTypes.func,
  selectedMovie: PropTypes.object,
};

export { MovieList };

