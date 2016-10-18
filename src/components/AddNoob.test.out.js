/*eslint-disable import/default*/
import React from 'react';
import { Provider } from 'react-redux';
import expect from 'expect';
import { mount } from 'enzyme';
import AddNoob from './AddNoob';
import configureStore from '../store/configureStore';
import initialState from '../store/initialState';

const store = configureStore(initialState);

describe('AddNoob component', () => {
  it('should render the AddNoob component', () => {
    const wrapper = mount(<Provider store={store}><AddNoob/></Provider>);
    const addNoobButton = wrapper.find('button').last();
    addNoobButton.simulate('click');

    const noobs = store.getState().noobs;
    expect(noobs.length).toBe(1);
    expect(noobs[0].noobPoints).toEqual(0);
    expect(true).toEqual(true);
  });
});
