import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

describe('pages | home | Home', () => {
	it('Renders the page', () => {
		const props = {
			handlerMenuPage: jest.fn(),
			handlerKitchen: jest.fn()
		};

		const component = shallow( <Home {...props} />)
		expect(component).toMatchSnapshot();
	});
});