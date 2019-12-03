import React, { Component } from 'react';

import breakfastIcon from '../../assets/breakfast.svg';
import dinner from "../../assets/fast-food.svg"

import './ListItem.scss';

class ListItem extends Component {
	render() {
		const { item, addItem, breakfast } = this.props;
		return (
			<div className="list-item">
				<button onClick={() => addItem(item)}className="button-item">
					<img src={breakfast ? breakfastIcon : dinner }  alt="coffe" className="menu-icon"/>
					<div className="text-menu">
						<p>{item.name}</p>
						{item.size &&
							<p>{item.size}</p>
						}
						<p>{ item.price ? `$ ${item.price}.00` : ''}</p>
					</div>
				</button>
			</div>
		)
	}
}

export default ListItem;