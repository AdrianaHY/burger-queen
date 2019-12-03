import React, { Component } from 'react';

import Tabs from '../../components/tabs/Tabs';
import List from '../../components/list/List';

import './Menu.scss';

class Menu extends Component {
	render() {
		const {
			breakfastMenu,
			breakfast,
			handlerMenuOption,
			dinnerAndLunchMenu,
			addItem,
			total
		} = this.props;
		return (
			<div className="menu-container">
				<h1 className="title">MENUS</h1>
				<Tabs
					breakfast={breakfast}
					handlerMenuOption={handlerMenuOption}
				/>
				<List
					breakfastMenu={breakfastMenu}
					dinnerAndLunchMenu={ dinnerAndLunchMenu}
					breakfast={breakfast}
					addItem={addItem}
					total={total}
				/>
			</div>
		)
	}
}

export default Menu;