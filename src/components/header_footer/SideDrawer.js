import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = props => {
	const styles = {
		backgroundColor: '#2f2f2f !important'
	};

	const scrollToElement = element => {
		scroller.scrollTo(element, {
			duration: 1500,
			delay: 100,
			smooth: true,
			offset: -85
		});
		props.onClose(false);
	};

	return (
		<Drawer
			anchor='right'
			classes={{ root: styles.root }}
			open={props.open}
			onClose={() => props.onClose(false)}>
			<List component='nav'>
				<ListItem button onClick={() => scrollToElement('featured')}>
					Events Starts In
				</ListItem>
				<ListItem button onClick={() => scrollToElement('venueinfo')}>
					Event Info
				</ListItem>
				<ListItem button onClick={() => scrollToElement('highlights')}>
					Highlights
				</ListItem>
				<ListItem button onClick={() => scrollToElement('pricing')}>
					Pricing
				</ListItem>
				<ListItem button onClick={() => scrollToElement('location')}>
					Location
				</ListItem>
			</List>
		</Drawer>
	);
};

export default SideDrawer;
