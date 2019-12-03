import React, { Component } from 'react';

import whiteLogo from '../../assets/white_logo.png';

import './Home.scss';

class Home extends Component {
	render() {
		const { handlerMenuPage, handlerKitchen } = this.props;
		return (
			<div className="home">
				<img src={whiteLogo} alt="logo"/>
				<h1 className="home-title">Who is using this app?</h1>
				<div className="button-container">
					<button
						onClick={handlerMenuPage}
						className="home-button"
					>
						waiter/waitress
					</button>
					<button
						onClick={handlerKitchen}
						className="home-button"
					>
						kitchen
					</button>
				</div>
			</div>
		)
	}
}

export default Home;