import React from 'react';

import classes from './Hero.css';

const Hero = props => {

	return (
		<section className={classes.Hero}>
			<div className={classes.Hero__body}>
				<h4 className={classes.Hero__title}>{props.title}</h4>
				<p className={classes.Hero__description}>{props.description}</p>
				<button className={classes.Hero__chevron}>
					{/* <a onClick={this.onTogglePage}><img src={chevronDown} alt="Chevron Down" /></a> */}
				</button>
			</div>
		</section>
	);
};

export default Hero;
