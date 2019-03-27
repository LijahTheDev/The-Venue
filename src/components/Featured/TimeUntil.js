import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import countdown from './countdown.module.css';

class TimeUntil extends Component {
	state = {
		title: 'Event Starts In',
		deadline: 'July, 31, 2019',
		days: '0',
		hours: '0',
		minutes: '0',
		seconds: '0'
	};

	getTimeUntil(deadline) {
		const time = Date.parse(deadline) - Date.parse(new Date());
		if (time < 0) {
			this.setState({ title: 'Date Passed' });
		} else {
			const seconds = Math.floor((time / 1000) % 60);
			const minutes = Math.floor((time / 1000 / 60) % 60);
			const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
			const days = Math.floor(time / (1000 * 60 * 60 * 24));

			this.setState({
				days,
				hours,
				minutes,
				seconds
			});
		}
	}

	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
	}

	render() {
		return (
			<Zoom left delay={1000}>
				<div className={countdown.wrapper}>
					<div className={countdown.top}>{this.state.title}</div>
					<div className={countdown.bottom}>
						<div className={countdown.item}>
							<div className={countdown.time}>
								{this.state.days}
							</div>
							<div className={countdown.tag}>Day</div>
						</div>
						<div className={countdown.item}>
							<div className={countdown.time}>
								{this.state.hours}
							</div>
							<div className={countdown.tag}>Hr</div>
						</div>
						<div className={countdown.item}>
							<div className={countdown.time}>
								{this.state.minutes}
							</div>
							<div className={countdown.tag}>Min</div>
						</div>
						<div className={countdown.item}>
							<div className={countdown.time}>
								{this.state.seconds}
							</div>
							<div className={countdown.tag}>Sec</div>
						</div>
					</div>
				</div>
			</Zoom>
		);
	}
}

export default TimeUntil;
