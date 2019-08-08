import { connect } from 'react-redux';
import { MovieList } from '../components/MovieList';

const mapStateToProps = state => ({
  movies: state.movies
});

const SearchResults = connect(
  mapStateToProps,
)(MovieList);

export { SearchResults };