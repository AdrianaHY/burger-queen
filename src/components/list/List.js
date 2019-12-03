import React, { Component } from 'react';

import ListItem from './ListItem';

import './List.scss';

class List extends Component {
	render() {
		const { breakfastMenu, breakfast, dinnerAndLunchMenu, addItem, total } = this.props;
		return (
			<div className="list-container">
				<div className="list">
				{
					(breakfast ? breakfastMenu : dinnerAndLunchMenu).map((item) => (
						<ListItem
							item={item}
							key={item.name}
							addItem={addItem}
							breakfast={breakfast}
						/>
					))
				}
				</div>
				<div className="total">
					<p>
						<span>Total</span>{' '}
						<span>{`$${total}.00`}</span>
					</p>
				</div>
			</div>
		)
	}
}

export default List;