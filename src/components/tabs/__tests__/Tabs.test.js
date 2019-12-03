import React from 'react';
import { shallow } from 'enzyme';
import Tabs from '../Tabs';

describe('components | tabs | Tabs', () => {
	it('Renders the component', () => {
		const props = {
			handlerMenuOption: jest.fn()
		};

		const component = shallow(
			<Tabs {...props} />
		);

		expect(component).toMatchSnapshot();
	})
})