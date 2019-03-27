import React, { Component } from 'react';
import { font_righteous } from '../../resources/styles.module.css';
import navbar from './navbar.module.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

class Header extends Component {
	state = {
		drawerOpen: false,
		headerShow: false
	};

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		window.scrollY > 0
			? this.setState({ headerShow: true })
			: this.setState({ headerShow: false });
	};

	toggleDrawer = value => {
		this.setState({
			drawerOpen: value
		});
	};

	render() {
		return (
			<AppBar
				position='fixed'
				style={{
					backgroundColor: this.state.headerShow
						? '#2f2f2f'
						: 'transparent',
					boxShadow: 'none'
				}}
				className={navbar.bar}>
				<Toolbar>
					<div className={navbar.logo}>
						<div
							className={`${navbar.logo_venue} 
							${font_righteous}`}>
							The Venue
						</div>
						<div className={navbar.logo_title}>Car Events</div>
					</div>

					<IconButton
						aria-label='Menu'
						color='inherit'
						onClick={() => this.toggleDrawer(true)}>
						<MenuIcon />
					</IconButton>
					<SideDrawer
						open={this.state.drawerOpen}
						onClose={value => this.toggleDrawer(value)}
					/>
				</Toolbar>
			</AppBar>
		);
	}
}

export default Header;
