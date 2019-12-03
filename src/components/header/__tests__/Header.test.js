import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('components | header | Header', () => {
	it('Renders the component', () => {
		const props = {
			handlerMenuPage: jest.fn(),
			handlerKitchen: jest.fn(),
			menu: true
		};

		const component = shallow( <Header {...props} />);

		expect(component).toMatchSnapshot();
	})
});