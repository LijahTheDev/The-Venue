import React from 'react';
import Fade from 'react-reveal/Fade';
import { center_wrapper } from '../../resources/styles.module.css';
import { description } from './highlight.module.css';

const Description = () => {
	return (
		<Fade>
			<div className={center_wrapper}>
				<h2>Highlights</h2>
				<div className={description}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Delectus laboriosam libero autem, consequuntur tempora
					aliquid rem provident sapiente labore maiores possimus, ipsa
					beatae id consectetur. Cupiditate optio fugit accusantium
					eos.
				</div>
			</div>
		</Fade>
	);
};

export default Description;
