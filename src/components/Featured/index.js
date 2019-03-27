import React from 'react';
import carousel from './carousel.module.css';
import Carousel from './Carousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
	return (
		<div className={carousel.featured_wrapper}>
			<Carousel />
			<div className={carousel.event_name_box}>
				<div className={carousel.event_name}>Automotive Exotics</div>
			</div>
			<TimeUntil />
		</div>
	);
};

export default Featured;
