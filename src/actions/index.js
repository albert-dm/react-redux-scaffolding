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

export const setLoading = (isLoading) => {
  return ({
    type: 'SET_LOADING',
    isLoading,
  });
};

export const setError = (errorMessage) => {
  return ({
    type: 'SET_ERROR',
    errorMessage,
  });
};