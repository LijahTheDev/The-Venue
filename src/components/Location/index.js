import React from 'react';

const Location = () => {
	return (
		<div className='location_wrapper'>
			<iframe
				title='eventMap'
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1778.866559712449!2d-96.80085759171655!3d32.769400099534714!2m3!1f0!2f38.91588441036323!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x864e9918c785c69f%3A0xe229195bef99dbd6!2sThe+Joule!5e1!3m2!1sen!2sus!4v1553579330513'
				width='100%'
				height='500'
				frameBorder='0'
				style={{ border: '0' }}
				allowFullScreen
			/>
			<div className='location_tag'>
				<div>Location</div>
			</div>
		</div>
	);
};

export default Location;
