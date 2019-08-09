let initialMovies;
const savedMovies = JSON.parse(localStorage.getItem('movies'));

if(savedMovies){
  initialMovies = savedMovies;
} else {
  initialMovies = [];
}

const movies = (state = { list: initialMovies, selected: undefined }, action) => {
  switch (action.type) {
  case 'SET_MOVIES':
    localStorage.setItem('movies', JSON.stringify(action.movies));
    return { ...state, list: [...action.movies] };
  case 'SELECT_MOVIE':
    return { ...state, selected: action.movie };
  default:
    return state;
  }
};

export { movies };