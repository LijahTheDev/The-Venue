import React, { Component } from 'react';
import { Element } from 'react-scroll';
import NavBar from './components/NavBar';
import Featured from './components/Featured';
import VenueInfo from './components/VenueInfo';
import Highlight from './components/Highlight';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />

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
			</React.Fragment>
		);
	}
}

export default App;
