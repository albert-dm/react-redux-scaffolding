import { connect } from 'react-redux';
import { MovieList } from '../components/MovieList';
import { setSelectedMovie } from '../actions';

const mapStateToProps = state => ({
  movies: state.movies.list,
  selectedMovie: state.movies.selected,
});

const mapDispatchToProps = dispatch => ({
  selectMovie: async (movie) => {
    dispatch(setSelectedMovie(movie));
  }
});

const SearchResults = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);

export { SearchResults };