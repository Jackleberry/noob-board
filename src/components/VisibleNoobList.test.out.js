/*eslint-disable import/default*/
import React from 'react';
import { Provider } from 'react-redux';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import VisibleNoobList from './VisibleNoobList';
import * as noobActions from '../actions/noob';
import configureStore from '../store/configureStore';
import initialState from '../store/initialState';

const store = configureStore(initialState);

describe('VisibleNoobList component', () => {
  it('should render the component', () => {
    const wrapper = mount(<Provider store={store}><VisibleNoobList/></Provider>);
    store.dispatch(noobActions.addNoob("noob1"));
    store.dispatch(noobActions.addNoob("noob2"));
    const noobs = wrapper.find('li');
    expect(noobs.length).toEqual(2);
  });
});
