import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../Menu';

describe('pages | menu | Menu', () => {
	it('Renders the page', () => {
		const props = {
			breakfastMenu: [
				'sandwich',
				'coffe'
			],
			breakfast: true,
			handlerMenuOption: jest.fn(),
			dinnerAndLunchMenu: [
				'simple hamburger',
				'soda'
			],
			addItem: jest.fn(),
			total: 0
		};

		const component = shallow( <Menu {...props} /> );

		expect(component).toMatchSnapshot();
	});
});