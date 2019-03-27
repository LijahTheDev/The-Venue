import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/icons/ticket.png';
import { iconImage } from '../../resources/styles.module.css';

const TicketButton = props => {
	return (
		<Button
			href={props.link}
			variant='contained'
			size='small'
			style={{ background: props.bck, color: props.color }}>
			<img src={TicketIcon} className={iconImage} alt='Ticket Icon' />
			{props.text}
		</Button>
	);
};

export default TicketButton;
