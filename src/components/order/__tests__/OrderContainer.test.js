import React from 'react';
import { shallow } from 'enzyme';
import OrderContainer from '../OrderContainer';

describe('components | order | Order Container', () => {
	it('Renders the component', () => {
		const props = {
			order: [
				'soda',
				'sandwich'
			],
			deleteItem: jest.fn()
		};

		const component = shallow(
			<OrderContainer {...props} />
		);

		expect(component).toMatchSnapshot();
	})
})