import React, { Component } from 'react';

import trash from '../../assets/paper-bin.svg'

import './OrderContainer.scss';

class OrderContainer extends Component {
	render() {
		const { order, deleteItem } = this.props;
		return (
			<div className="order-container">
				<div className="order">
					{order.map((item) => (
						<div className="order-item" key={item}>
							<p className="order-text">{item}</p>
							<button onClick={() =>deleteItem(item)}>
								<img  src={trash} alt="trash" className="trash" />
							</button>
						</div>
					))}
				</div>
				<button className="button-kitchen">Send to kitchen</button>
			</div>
		)
	}
}

export default OrderContainer;