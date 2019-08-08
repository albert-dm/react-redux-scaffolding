import React from 'react';
import PropTypes from 'prop-types';
import './movieThumb.scss';

import { Paper, CardTitle, Media, MediaOverlay } from 'react-md';

/* const MoviePropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}) */

const MovieThumb = ({
  movie,
}) => {
  return <Paper className="movie-thumb">
    <Media aspectRatio="4-3">
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <MediaOverlay>
        <CardTitle title={movie.Title} subtitle={movie.Year} />
      </MediaOverlay>
    </Media>
  </Paper>;
};

MovieThumb.propTypes = {
  movie: PropTypes.object.isRequired,
};

export { MovieThumb };