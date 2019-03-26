import React from 'react';
import Carousel from './Carousel ';
import TimeUntil from './TimeUntil';

const Featured = () => {
	return (
		<div style={{ position: 'relative' }}>
			<Carousel />
			<div className='event_name'>
				<div className='wrapper'>Automotive Exotics</div>
			</div>
			<TimeUntil />
		</div>
	);
};

export default Featured;
