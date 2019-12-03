import React, { Component } from 'react';

import breakfastIcon from '../../assets/breakfast.svg';
import lunchAndDinner from '../../assets/burger-and-soda.svg';

import './Tabs.scss';

class Tabs extends Component {
	render() {
		const { handlerMenuOption } = this.props;
		return (
			<div className="tabs-container">
				<button onClick={handlerMenuOption} className="tab">
					<img src={breakfastIcon} alt="breakfast" className="menu-image"/>
					<p className="menu-title">breakfast</p>
				</button>
				<button onClick={handlerMenuOption} className="tab">
					<img src={lunchAndDinner} alt="breakfast" className="menu-image"/>
					<p className="menu-title">lunch and dinner</p>
				</button>
			</div>
		)
	}
}

export default Tabs;