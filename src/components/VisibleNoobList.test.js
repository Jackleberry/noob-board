import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import noobs from '../reducers/Noobs';
import visibilityFilter from '../reducers/VisibilityFilter';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import VisibleNoobList from './VisibleNoobList';
import noobActions from '../actions/noob';

const store = createStore(combineReducers({
  noobs,
  visibilityFilter
}), window.devToolsExtension && window.devToolsExtension());

describe('VisibleNoobList component', () => {
  it('should render the component', () => {
    const wrapper = mount(<Provider store={store}><VisibleNoobList/></Provider>);
    store.dispatch(noobActions.addNoob("noob1"));
    store.dispatch(noobActions.addNoob("noob2"));
    const noobs = wrapper.find('li');
    expect(noobs.length).toEqual(2);
  });
});
