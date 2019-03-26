import React from 'react';
import Slider from 'react-slick';

import slide_one from '../../resources/images/slide-one.jpg';
import slide_two from '../../resources/images/slide-two.jpg';
import slide_three from '../../resources/images/slide-three.jpg';
import slide_four from '../../resources/images/slide-four.jpg';

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000
	};

	return (
		<div
			className='carousel_wrapper'
			style={{
				height: `${window.innerHeight}px`,
				overflow: 'hidden'
			}}>
			<Slider {...settings}>
				<div
					className='carousel_image'
					style={{
						height: `${window.innerHeight}`
					}}>
					<img src={slide_one} alt='Car Meetup' />
				</div>
				<div
					className='carousel_image'
					style={{
						height: `${window.innerHeight}px`
					}}>
					<img src={slide_two} alt='Exotics Meetup' />
				</div>
				<div
					className='carousel_image'
					style={{
						height: `${window.innerHeight}px`
					}}>
					<img src={slide_three} alt='Mercedes Dealership' />
				</div>
				<div
					className='carousel_image'
					style={{
						height: `${window.innerHeight}px`
					}}>
					<img src={slide_four} alt='Audi Dealership' />
				</div>
			</Slider>
		</div>
	);
};

export default Carousel;
