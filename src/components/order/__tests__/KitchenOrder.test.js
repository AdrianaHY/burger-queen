import React from 'react';
import { shallow } from 'enzyme';
import KitchenOrder from '../KitchenOrder';

describe('components | order | KitchenOrder', () => {
	it('Renders the component', () => {
		const props = {
			order: [
				'sandwich',
				'coffee',
				'juice'
			]
		};

		const component = shallow(
			<KitchenOrder {...props} />
		);

		expect(component).toMatchSnapshot();
	})
})