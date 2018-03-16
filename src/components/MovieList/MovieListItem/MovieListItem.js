import React from 'react';

import classes from './MovieListItem.css';

const MovieListItem = (props) => {

    return (
        <div className={classes.MovieListItem}>
            <img className={classes.MovieList__Image} alt="Movie Image" /> 
            <span className={classes.MovieList__Raating}>10</span>
            <h3 className={classes.MovieList__Title}>Movie Title</h3>
            <p className={classes.MovieList__Description}>T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.</p>
        </div>
    );

};

export default MovieListItem;
