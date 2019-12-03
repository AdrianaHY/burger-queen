import React, { Component } from 'react';

import restaurant from '../../assets/restaurant.svg';

import './KitchenOrder.scss';

class KitchenOrder extends Component {
	render() {
		const { order } = this.props;
		return (
			<div className="kitchen-order-container">
				<div className="text-container">
					<img src={restaurant} className="text-image" alt="restaurant"/>
					<h3>Table 1</h3>
				</div>
				<div className="kitchen-items-container">
					<div className="kitchen-item">
						{ order.map((item) => (
							<p className="kitchen-item-text" key={item}>{item}</p>
						))}
					</div>
					<button className="order-ready">order ready</button>
				</div>
			</div>
		)
	}
}

export default KitchenOrder;