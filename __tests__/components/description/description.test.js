import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Description from '../../../src/components/description';

configure({ adapter: new Adapter() });

describe('Description ', () => {
    test('match snapshot', () => {
        const wrapper = shallow(<Description />);
        expect(wrapper).toMatchSnapshot();
    });
});
