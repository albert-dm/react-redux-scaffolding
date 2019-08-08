import axios from 'axios';
import { OMDB_API_KEY } from '../config';

const API_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;

export const fetchMovies = async ({ title, year }) => {
  const { data, status } = await axios.get(`${API_URL}&s=${title}${year ? `&y=${year}` : ''}`);
  if(status === 200){
    if(data.Response === 'True'){
      return data.Search;
    } else{
      throw new Error(data.Error);
    }
  } else {
    throw new Error('Failed to fetch');
  }

};