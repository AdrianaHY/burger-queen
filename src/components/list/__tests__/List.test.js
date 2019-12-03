import React from 'react';
import { shallow } from 'enzyme';
import List from '../List';

describe('components | list | List', () => {
	it('Renders the component' , () => {
		const props = {
			breakfast: true,
			breakfastMenu: [
				'Sandwich',
				'Coffe'
			],
			dinnerAndLunchMenu: [
				'Simple Burger',
				'Large Soda'
			],
			addItem: jest.fn(),
			total: 50
		};

		const component = shallow(
			<List {...props} />
		);

		expect(component).toMatchSnapshot();
	})
})