import React from 'react';
import { shallow } from 'enzyme';
import Kitchen from '../Kitchen';

describe('pages | kitchen | Kitchen', () => {
	it('Renders the page', () => {
		shallow(<Kitchen />);
	});
});