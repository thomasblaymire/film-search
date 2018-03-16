import axios from 'axios';
import { FETCH_MOVIES } from './types';

const ROOT_URL = 'https://api.themoviedb.org/3/search/movie?api_key=';
const API_KEY = 'a02ae9c833165463b7ef033a6f9ae01e';

const fetchMovies = (term) => {
  console.log(term);
  return function(dispatch) {
    axios.get(`${ROOT_URL} + ${API_KEY}&language=en-US&query=`+ term)
    .then(res => dispatch({ type: FETCH_MOVIES, payload: res }));
  }
}