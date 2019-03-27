import React from 'react';
import Slider from 'react-slick';

import slide_one from '../../resources/images/slide-one.jpg';
import slide_two from '../../resources/images/slide-two.jpg';
import slide_three from '../../resources/images/slide-three.jpg';
import slide_four from '../../resources/images/slide-four.jpg';
import mobile_four from '../../resources/images/slide-four-mobile.jpg';

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000
	};
	return (
		<div
			style={{
				height: `${window.innerHeight}px`,
				overflow: 'hidden'
			}}>
			<Slider {...settings}>
				<div
					style={{
						height: `${window.innerHeight}`
					}}>
					<img src={slide_one} alt='Mustang Headlight' />
				</div>
				<div
					style={{
						height: `${window.innerHeight}px`
					}}>
					<img src={slide_two} alt='Ferrari Side' />
				</div>
				<div
					style={{
						height: `${window.innerHeight}px`
					}}>
					<img src={slide_three} alt='Mercedes Dealership' />
				</div>
				<div
					style={{
						height: `${window.innerHeight}px`
					}}>
					{window.innerWidth > 500 ? (
						<img src={slide_four} alt='Audi Dealership' />
					) : (
						<img src={mobile_four} alt='Audi Dealership' />
					)}
				</div>
			</Slider>
		</div>
	);
};

export default Carousel;
