import React from 'react';
import { shallow } from 'enzyme';
import Title from '../Title';

describe('components | title | Title', () => {
	it('Renders the component', () => {
		const props = { title: 'Title'};

		const component = shallow( <Title {...props}/>)

		expect(component).toMatchSnapshot();
	});
});