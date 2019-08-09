import React from 'react';
import PropTypes from 'prop-types';
import './movieThumb.scss';

import { Paper, CardTitle, Media, MediaOverlay, Button } from 'react-md';

const MovieThumb = ({
  movie,
  onClick,
}) => {
  const showMore = () => {
    onClick();
    window.scrollTo(0, 0);
  };
  return <Paper className="movie-thumb">
    <Media aspectRatio="1-1">
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <MediaOverlay>
        <CardTitle
          title={movie.Title}
          subtitle={`Rating: ${movie.imdbRating}`}
        >
          {
            onClick &&
            <Button onClick={showMore} className="action-button" floating secondary>add</Button>
          }
        </CardTitle>
      </MediaOverlay>
    </Media>
  </Paper>;
};

MovieThumb.propTypes = {
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export { MovieThumb };