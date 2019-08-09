const global = (state = { isLoading: false, error: '' }, action) => {
  switch (action.type) {
  case 'SET_LOADING':
    return { ...state, isLoading: action.isLoading };
  case 'SET_ERROR':
    return { ...state, error: action.errorMessage };
  default:
    return state;
  }
};

export { global };