import React from 'react';
import { Fade, Zoom } from 'react-reveal';
import { center_wrapper } from '../../resources/styles.module.css';
import { description } from './highlight.module.css';
import car from './../../resources/images/car.png';

const Description = () => {
	return (
		<React.Fragment>
			<Fade>
				<div className={center_wrapper}>
					<h2>Highlights</h2>
					<div className={description}>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit.
							<br /> Delectus laboriosam libero autem,
							consequuntur tempora aliquid rem provident sapiente
							labore maiores possimus, ipsa beatae id consectetur.
							Cupiditate optio fugit accusantium eos.
						</div>
						<Zoom right>
							<img src={car} alt='Car' />
						</Zoom>
					</div>
				</div>
			</Fade>
		</React.Fragment>
	);
};

export default Description;
