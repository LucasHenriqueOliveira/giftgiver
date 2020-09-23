import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';

configure({adapter: new Adapter()});
const app = shallow(<App />);

it('renders correctly', () => {
    expect(app).toMatchSnapshot();
});

it('initialize the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
});

it('add a new gift to `state` when clicking the `add gift` button', () => {
    app.find('.btn-add').simulate('click');
    
    expect(app.state().gifts).toEqual([ { id: 1 }]);
});