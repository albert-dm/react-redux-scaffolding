const filters = (state = { attribute: undefined, order: undefined }, action) => {
  switch (action.type) {
  case 'SET_FILTERS':
    return action.filters;
  default:
    return state;
  }
};

export { filters };