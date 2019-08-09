import axios from 'axios';
import { OMDB_API_KEY } from '../config';

const API_URL = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&type=movie`;

export const fetchMovies = async ({ title, year }) => {
  const { data, status } = await axios.get(`${API_URL}&s=${title}${year ? `&y=${year}` : ''}`);
  if (status === 200) {
    if (data.Response === 'True') {
      const movies = await Promise.all(data.Search.map(
        async (movie) => await fetchMovie(movie.imdbID)
      ));
      return movies;

    } else {
      throw new Error(data.Error);
    }
  } else {
    throw new Error('Failed to fetch');
  }

};

export const fetchMovie = async (imdbID) => {
  const { data, status } = await axios.get(`${API_URL}&plot=full&i=${imdbID}`);
  if (status === 200) {
    if (data.Response === 'True') {
      return data;
    } else {
      throw new Error(data.Error);
    }
  } else {
    throw new Error('Failed to fetch');
  }
};