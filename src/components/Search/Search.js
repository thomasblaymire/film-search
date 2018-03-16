import React, { Component } from "react";

import classes from './Search.css';

class Search extends Component {
  handleChange = event => {
    console.log("input value is" + event.target.value);
  };

  render() {
    return (
      <div>
        <form action="#" className={classes.Search}>
          <input
            onChange={this.handleChange.bind(this)}
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
