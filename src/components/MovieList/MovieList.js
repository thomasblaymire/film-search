import React, { Component } from "react";
import classes from "./MovieList.css";

import MovieListItem from "./MovieListItem/MovieListItem";

class MovieList extends Component {
  render() {
    console.log(this.props.movieData);

    return (
      <div className={classes.MovieList}>
        {this.props.movieData.slice(0, 12).map(movie => (
          <MovieListItem
            key={movie.id}
            image={movie.backdrop_path}
            title={movie.title}
            description={movie.overview}
            rating={movie.vote_average}
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
