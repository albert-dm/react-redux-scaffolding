import { connect } from 'react-redux';
import { SearchForm } from '../components/SearchForm';
import { setMovies } from '../actions';
import { fetchMovies } from '../services/movieService';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  search: async (params) => {
    const movies = await fetchMovies(params); 
    dispatch(setMovies(movies));
  }
});

const SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchForm);

export { SearchFormContainer };