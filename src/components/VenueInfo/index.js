import React from 'react';
import Zoom from 'react-reveal/Zoom';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VenueInfo = () => {
	return (
		<div className='bck_black'>
			<div className='center_wrapper'>
				<div className='vn_wrapper'>
					<Zoom>
						<div className='vn_item'>
							<div className='vn_outer'>
								<div className='vn_inner'>
									<div className='vn_icon_square bck_red' />
									<img
										className='vn_icon'
										src={icon_calendar}
										alt='Calendar'
									/>
									<div className='vn_title'>
										Event Date & Time
									</div>
									<div className='vn_desc'>
										7 October 2019 @10:30PM
									</div>
								</div>
							</div>
						</div>
					</Zoom>
					<Zoom delay={1000}>
						<div className='vn_item'>
							<div className='vn_outer'>
								<div className='vn_inner'>
									<div className='vn_icon_square bck_yellow' />
									<img
										className='vn_icon'
										src={icon_location}
										alt='Calendar'
									/>
									<div className='vn_title'>
										Event Location
									</div>
									<div className='vn_desc'>
										43 Pine Street Davis, CA 95838
									</div>
								</div>
							</div>
						</div>
					</Zoom>
				</div>
			</div>
		</div>
	);
};

export default VenueInfo;
