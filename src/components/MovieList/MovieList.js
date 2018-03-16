import React, { Component } from "react";
import classes from "./MovieList.css";

import MovieListItem from './MovieListItem/MovieListItem';

import axios from 'axios';

class MovieList extends Component {
  state = {

  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = (term) => {
    const ROOT_URL = 'https://api.themoviedb.org/3/search/movie?api_key=';
    const API_KEY = 'a02ae9c833165463b7ef033a6f9ae01e';

    console.log(term);
    return function(dispatch) {
      axios.get(`${ROOT_URL} + ${API_KEY}&language=en-US&query=`+ term).then(res => res.json);
    }
  }

  render() {
    return (
        <div className={classes.MovieList}>
          <MovieListItem />
          <MovieListItem />
          <MovieListItem />
          <MovieListItem />
          <MovieListItem />
          <MovieListItem />
          <MovieListItem />
          <MovieListItem />
          <MovieListItem />
          <MovieListItem />
        </div>
    );
  }
}

export default MovieList;
