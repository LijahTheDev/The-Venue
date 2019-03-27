import React, { Component } from 'react';
import TicketButton from '../utils/TicketButton';
import Zoom from 'react-reveal/Zoom';
import { bck_black, center_wrapper } from '../../resources/styles.module.css';
import pricing from './pricing.module.css';

class Pricing extends Component {
	state = {
		prices: [100, 150, 250],
		positions: ['Basic', 'Premium', 'VIP'],
		desc: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, tempora?',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, tempora!'
		],
		linkto: [
			'https://www.googl.com',
			'https://www.googl.com',
			'https://www.googl.com'
		],
		delay: [500, 0, 500]
	};

	showBoxes = () =>
		this.state.prices.map((box, i) => (
			<Zoom delay={this.state.delay[i]} key={i}>
				<div className={pricing.item}>
					<div className={pricing.inner_wrapper}>
						<div className={pricing.title}>
							<span>${this.state.prices[i]}</span>
							<span>{this.state.positions[i]}</span>
						</div>
						<div className={pricing.description}>
							{this.state.desc[i]}
						</div>
						<div className={pricing.button}>
							<div className={pricing.buttons}>
								<TicketButton
									text='Purchase Tickets'
									bck='#ffa800'
									color='#fff'
									link={this.state.linkto[i]}
								/>
							</div>
						</div>
					</div>
				</div>
			</Zoom>
		));

	render() {
		return (
			<div className={bck_black}>
				<div className={`${center_wrapper} ${pricing.section}`}>
					<h2>Pricing</h2>
					<div className={pricing.wrapper}>{this.showBoxes()}</div>
				</div>
			</div>
		);
	}
}

export default Pricing;
