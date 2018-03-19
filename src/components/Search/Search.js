import React, { Component } from "react";

import classes from './Search.css';

class Search extends Component {
  

  render() {
    return (
      <div>
        <form action="#" className={classes.Search}>
          <input
            onChange={this.props.handleSearchChange}
            type="text"
            className={classes.Search__input}
            placeholder="Search for a film"
          />
        </form>
      </div>
    );
  }
}

export default Search;
