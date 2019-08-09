const filterProps = {
  'Title': 'Title',
  'Rate': 'imdbRating',
};

export const sortMovies = ({ movies, attribute, order }) => {
  return movies.sort(
    (a, b) => {
      if (a[filterProps[attribute]] > b[filterProps[attribute]]) {
        return order === 'Asc.' ? 1 : -1;
      }
      if (a[filterProps[attribute]] < b[filterProps[attribute]]) {
        return order === 'Asc.' ? -1 : 1;
      }
      return 0;
    }
  );
};