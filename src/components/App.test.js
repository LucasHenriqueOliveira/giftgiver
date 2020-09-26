import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';

configure({adapter: new Adapter()});

describe('App', () => {
    const app = shallow(<App />);

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('initialize the `state` with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });

    describe('when `add-gift` button is clicked', () => {
        const id = 1;

        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });

        afterEach(() => {
            app.setState({ gifts: [] });
        });

        it('add a new gift to `state`', () => {
            expect(app.state().gifts).toEqual([{ id }]);
        });

        it('adds a new gift to the rendered list', () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        });

        it( 'creates a Gift component', () => {
            expect(app.find('Gift').exists()).toBe(true);
        });

        describe('and the user wants to remove the added gift', () => {
            beforeEach(() => {
              app.instance().removeGift(id);
            });
      
            it('removes the gift from `state`', () => {
              expect(app.state().gifts).toEqual([]);
            });
        });
    });
});