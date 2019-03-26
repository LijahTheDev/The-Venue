import React, { Component } from 'react';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import TicketButton from '../utils/TicketButton';

class Discount extends Component {
	state = {
		discountStart: 10,
		discountEnd: 30
	};

	percentage = () => {
		let { discountStart, discountEnd } = this.state;

		if (discountStart < discountEnd) {
			this.setState({
				discountStart: this.state.discountStart + 1
			});
		}
	};

	componentDidUpdate() {
		setTimeout(() => {
			this.percentage();
		}, 160);
	}

	render() {
		return (
			<div className='center_wrapper'>
				<div className='discount_wrapper'>
					<Flip top delay={1000} onReveal={() => this.percentage()}>
						<div className='discount_percentage'>
							<span>{this.state.discountStart}%</span>
							<span>OFF</span>
						</div>
					</Flip>
					<Slide right>
						<div className='discount_description'>
							<h3>Purchase Tickets before 31st JULY</h3>
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Neque, perspiciatis veniam
								culpa doloremque tempora quibusdam nisi quisquam
								ut atque sunt ullam tenetur odio qui. Asperiores
								qui cumque deserunt laudantium repudiandae?
							</p>

							<TicketButton
								text='Purchase Tickets'
								bck='#ffa800'
								color='#fff'
								link='https://google.com'
							/>
						</div>
					</Slide>
				</div>
			</div>
		);
	}
}

export default Discount;
