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