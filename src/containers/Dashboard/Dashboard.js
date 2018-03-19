import React, { Component } from "react";
import classes from "./Dashboard.css";
import axios from 'axios';

import Hero from "./../../components/Hero/Hero";
import Search from "../../components/Search/Search";
import MovieList from './../../components/MovieList/MovieList';

class Dashboard extends Component {
  state = {
    heroTitle: "Film Search",
    heroDescription: "Search for a movie, actor or genre.",
    searchTerm: null,
    movieResults: [],
    displayError: false
  };

  componentDidMount() {
    this.fetchMovies('The');
    console.log('Component Did Mount');
  }

  render() {

    this.handleSearchChange = event => {
      this.setState({searchTerm : event.target.value});
      this.fetchMovies(this.state.searchTerm);
    };

    this.fetchMovies = (term) => {
      const ROOT_URL = 'https://api.themoviedb.org/3/search/movie?api_key=';
      const API_KEY = 'a02ae9c833165463b7ef033a6f9ae01e';
      let TERM = term;
  
      axios.get(`${ROOT_URL}${API_KEY}&language=en-US&query=${TERM}`)
        .then( (response) => {
          this.setState({movieResults: response.data.results});
        })
        .catch(err => {
          console.log(err);
        })
    }
  

    return (

      <div className={classes.Container}>

        <div className={classes.Dash__Hero}>  
          <Hero
            title={this.state.heroTitle}
            description={this.state.heroDescription}
          />
        </div>

        <div className={classes.Dash__Search}>
          <Search 
            handleSearchChange={this.handleSearchChange} />
        </div>

        <div className={classes.Dash__Movies}>
          <MovieList
            movieData={this.state.movieResults} />
        </div>

      </div>

    );
  }
}

export default Dashboard;
