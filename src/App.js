import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/Featured';
import VenueInfo from './components/VenueInfo';
import Highlight from './components/Highlight';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/header_footer/Footer';

class App extends Component {
	render() {
		return (
			<div className='App' style={{ height: '1500px' }}>
				<Header />

				<Element name='featured'>
					<Featured />
				</Element>
				<Element name='venueinfo'>
					<VenueInfo />
				</Element>
				<Element name='highlights'>
					<Highlight />
				</Element>
				<Element name='pricing'>
					<Pricing />
				</Element>
				<Element name='location'>
					<Location />
				</Element>

				<Footer />
			</div>
		);
	}
}

export default App;
