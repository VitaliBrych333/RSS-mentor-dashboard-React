import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Table from '../../../src/components/table';

configure({ adapter: new Adapter() });

describe('Table ', () => {
    test('match snapshot', () => {
        const wrapper = shallow(<Table />);
        expect(wrapper).toMatchSnapshot();
    });
});
