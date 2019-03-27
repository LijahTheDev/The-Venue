import React from 'react';
import Fade from 'react-reveal/Fade';
import { font_righteous, bck_red } from '../../resources/styles.module.css';
import footer from './footer.module.css';

const Footer = () => {
	return (
		<footer className={bck_red}>
			<Fade delay={500}>
				<div className={`${font_righteous} ${footer.main}`}>
					The Venue
					<div className={footer.copyright}>
						&copy;2019 All Rights Reserved.
					</div>
				</div>
			</Fade>
		</footer>
	);
};

export default Footer;
