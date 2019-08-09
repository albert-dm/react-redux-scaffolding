import { connect } from 'react-redux';
import { SearchForm } from '../components/SearchForm';
import { setMovies, setLoading, setError } from '../actions';
import { fetchMovies } from '../services/movieService';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  search: async (params) => {
    dispatch(setError(''));
    try {
      dispatch(setLoading(true));
      const movies = await fetchMovies(params);
      dispatch(setMovies(movies));
    } catch (e) {
      dispatch(setError(e.message));
    } finally {
      dispatch(setLoading(false));
    }
  }
});

const SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchForm);

export { SearchFormContainer };