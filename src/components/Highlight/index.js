import React from 'react';
import Description from './Description';
import Discount from './Discount/Discount';
import highlight from './highlight.module.css';

const Highlights = () => {
	return (
		<div className={highlight.wrapper}>
			<Description />
			<Discount />
		</div>
	);
};

export default Highlights;
