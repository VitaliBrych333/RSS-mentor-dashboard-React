import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../../src/components/App';

configure({ adapter: new Adapter() });

describe('App ', () => {
    test('match snapshot', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('render app correctly with null value', () => {  
    const props = {
            value: null,
        },
        AppComponent = mount(<App {...props} />);
    expect((AppComponent).prop('value')).toEqual(null);
});
