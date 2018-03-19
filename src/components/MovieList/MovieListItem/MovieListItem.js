import React from 'react';

import classes from './MovieListItem.css';

const MovieListItem = (props) => {

   let imageURL = 'http://image.tmdb.org/t/p/w780//' + props.image;

    return (
        <div className={classes.MovieListItem}>
            <img className={classes.MovieListItem__Image} src={imageURL} alt={props.title} /> 
            <span className={classes.MovieListItem__Raating}>{props.rating}</span>
            <div className={classes.MovieListItemDetails}>
                <h3 className={classes.MovieListItem__Title}>{props.title}</h3>
                <p className={classes.MovieListItem__Description}>{props.description}</p>
            </div>
        </div>
    );

};

export default MovieListItem;
