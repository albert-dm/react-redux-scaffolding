export const setMovies = (movies) => {
  return ({
    type: 'SET_MOVIES',
    movies,
  });
};

export const setSelectedMovie = (movie) => {
  return ({
    type: 'SELECT_MOVIE',
    movie,
  });
};

export const setFilters = (filters) => {
  return ({
    type: 'SET_FILTERS',
    filters,
  });
};