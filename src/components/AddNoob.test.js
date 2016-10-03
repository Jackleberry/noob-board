import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import noobs from '../reducers/Noobs';
import visibilityFilter from '../reducers/VisibilityFilter';
import expect from 'expect';
import { mount } from 'enzyme';
import AddNoob from './AddNoob';

const store = createStore(combineReducers({
  noobs,
  visibilityFilter
}), window.devToolsExtension && window.devToolsExtension());

describe('AddNoob component', () => {
  it('should render the AddNoob component', () => {
    const wrapper = mount(<Provider store={store}><AddNoob/></Provider>);
    const addNoobButton = wrapper.find('button').last();
    addNoobButton.simulate('click');

    const noobs = store.getState().noobs;
    expect(noobs.length).toBe(1);
    expect(noobs[0].noobPoints).toEqual(0);
  });
});
