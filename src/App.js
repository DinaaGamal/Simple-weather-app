import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Lat: null,
			errorMessage: ''
		};
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ Lat: position.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	render() {
		if (this.state.errorMessage && !this.state.Lat) {
			return <div> Error: {this.state.errorMessage}</div>;
		}
		if (!this.state.errorMessage && this.state.Lat) {
			return <SeasonDisplay Lat={this.state.Lat} />;
		}

		return <Spinner message="Please accept Location Request..." />;
	}
}
