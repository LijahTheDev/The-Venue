import React from 'react';
import Zoom from 'react-reveal/Zoom';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';
import vi from './venueInfo.module.css';
import {
	bck_black,
	bck_red,
	bck_yellow,
	center_wrapper
} from '../../resources/styles.module.css';

const VenueInfo = () => {
	return (
		<div className={bck_black}>
			<div className={center_wrapper}>
				<div className={vi.wrapper}>
					<Zoom>
						<div className={vi.item}>
							<div className={vi.outer}>
								<div className={vi.inner}>
									<div
										className={`${vi.icon_square} 
									${bck_red}`}
									/>
									<img
										className={vi.icon}
										src={icon_calendar}
										alt='Calendar'
									/>
									<div className={vi.title}>
										Event Date & Time
									</div>
									<div className={vi.desc}>
										7 October 2019 @10:30PM
									</div>
								</div>
							</div>
						</div>
					</Zoom>
					<Zoom delay={1000}>
						<div className={vi.item}>
							<div className={vi.outer}>
								<div className={vi.inner}>
									<div
										className={`${vi.icon_square} 
										${bck_yellow}`}
									/>
									<img
										className={vi.icon}
										src={icon_location}
										alt='Calendar'
									/>
									<div className={vi.title}>
										Event Location
									</div>
									<div className={vi.desc}>
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
