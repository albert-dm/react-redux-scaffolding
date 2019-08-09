import { combineReducers } from 'redux';
import { movies } from './movies';
import { filters } from './filters';
import { global } from './global';

export default combineReducers({
  movies,
  filters,
  global,
});