import React, { Component } from 'react';

import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Kitchen from './pages/kitchen/Kitchen';
import Header from './components/header/Header';
import OrderContainer from './components/order/OrderContainer';

import './App.css';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: false,
			kitchen: false,
			breakfastMenu: [],
			dinnerAndLunchMenu: [],
			breakfast: true,
			total: 0,
			newOrder: []
		}
	};

	componentDidMount() {
		const myInit = {
			method: 'GET',
			mode: 'cors',
			cache: 'default'
		};

		const requestBreakfast = new Request('https://v2-api.sheety.co/154c85ef6ef076339b1ecd03e5a565b5/burgerQueen/breakfast', myInit);

		fetch(requestBreakfast)
			.then((response) => {
				return response.json();
			})
			.then((breakfast) => {
				this.setState({ breakfastMenu: breakfast.breakfast })
			})

		const requestDinnerAndLunch = new Request('https://v2-api.sheety.co/154c85ef6ef076339b1ecd03e5a565b5/burgerQueen/dinner', myInit);

		fetch(requestDinnerAndLunch)
			.then((response) => {
				return response.json();
			})
			.then((dinner) => {
				this.setState({ dinnerAndLunchMenu: dinner.dinner })
			})
	}

	handlerMenuPage = (e) => {
		e.preventDefault();
		this.setState(
			{ menu: !this.state.menu }
		);
	}

	handlerKitchen = (e) => {
		e.preventDefault();
		this.setState(
			{ kitchen: !this.state.kitchen }
		);
	}

	handlerMenuOption = (e) => {
		e.preventDefault();
		this.setState({
			breakfast: !this.state.breakfast, newOrder: [], total: 0
		})
	}

	addItem = (item) => {
		this.state.newOrder.push(item.name);
		this.setState({
			newOrder: this.state.newOrder,
			total: item.price
		});
		const suma = this.state.total + item.price;
		this.setState({ total: suma })
	}

	deleteItem = (item) => {
		this.state.newOrder.pop(item);
		this.setState({
			newOrder: this.state.newOrder,
		});
	}

	render() {
		const {
			menu,
			kitchen,
			breakfastMenu,
			dinnerAndLunchMenu,
			breakfast,
			newOrder,
			total
		} = this.state;
		return (
			<div className="App">
				{(!menu && !kitchen) &&
					<Home
						handlerMenuPage={this.handlerMenuPage}
						handlerKitchen={this.handlerKitchen}
					/>
				}
				{ (menu || kitchen) &&
					<Header
						handlerMenuPage={this.handlerMenuPage}
						handlerKitchen={this.handlerKitchen}
						menu={menu}
					/>
				}
				{ menu &&
					<Menu
						breakfastMenu={breakfastMenu}
						dinnerAndLunchMenu={dinnerAndLunchMenu}
						handlerMenuOption={this.handlerMenuOption}
						breakfast={breakfast}
						addItem={this.addItem}
						total={total}
					/>
				}
				{ kitchen && <Kitchen order={newOrder}/> }
				{(newOrder.length > 0 && menu) &&
					<OrderContainer
						order={newOrder}
						deleteItem={this.deleteItem}
					/>
				}
			</div>
		)
	}
}

export default App;
