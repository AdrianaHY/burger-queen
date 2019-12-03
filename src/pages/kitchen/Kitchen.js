import React, { Component } from 'react';

import KitchenOrder from '../../components/order/KitchenOrder';

import './Kitchen.scss';

class Kitchen extends Component {
	render() {
		const { order } = this.props;
		return (
			<div className="kitchen-container">
				<h1 className="kitchen-title">KITCHEN</h1>
				<KitchenOrder order={order}/>
			</div>
		)
	}
}

export default Kitchen;