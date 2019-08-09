import { connect } from 'react-redux';
import { MovieList } from '../components/MovieList';
import { setSelectedMovie } from '../actions';
import { sortMovies } from '../helpers/movieHelper';

const mapStateToProps = state => {
  let movies;
  if(state.filters.attribute){
    movies = [...sortMovies({movies: state.movies.list, ...state.filters})];
  } else {
    movies = state.movies.list;
  }
  return {
    movies,
    selectedMovie: state.movies.selected,
  };
};

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