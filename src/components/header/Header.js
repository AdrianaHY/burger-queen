import React, { Component } from 'react';

import logoMobile from '../../assets/white_logo_mobile.png';
import user from '../../assets/user.svg';

import './Header.scss';

class Header extends Component {
	render() {
		const { handlerMenuPage, handlerKitchen, menu } = this.props;
		return(
			<header className="header">
				<button onClick={menu ? handlerMenuPage : handlerKitchen}>
					<img src={logoMobile} alt="logo-mobile" className="logo"/>
				</button>
				<img src={user} alt="user" className="user" />
			</header>
		)
	}
}

export default Header;