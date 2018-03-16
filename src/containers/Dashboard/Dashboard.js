import React, { Component } from "react";
import classes from "./Dashboard.css";

import Hero from "./../../components/Hero/Hero";
import Search from "../../components/Search/Search";
import MovieList from './../../components/MovieList/MovieList';

class Dashboard extends Component {
  state = {
    heroTitle: "Film Search",
    heroDescription: "Search for a movie, actor or genre."
  };

  render() {
    return (

      <div className={classes.Container}>

        <div className={classes.Dash__Hero}>  
          <Hero
            title={this.state.heroTitle}
            description={this.state.heroDescription}
          />
        </div>

        <div className={classes.Dash__Search}>
          <Search />
        </div>

        <div className={classes.Dash__Movies}>
          <MovieList />
        </div>

      </div>

    );
  }
}

export default Dashboard;
