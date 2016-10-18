/*eslint-disable import/default*/
import React from 'react';
import { Provider } from 'react-redux';
import expect from 'expect';
import { mount } from 'enzyme';
import * as noobActions from '../actions/noob';
import NoobRow from './NoobRow';
import configureStore from '../store/configureStore';
import initialState from '../store/initialState';

const store = configureStore(initialState);

describe('NoobRow component', () => {
  it('should render the NoobRow component', () => {
    store.dispatch(noobActions.addNoob("noob"));
    const noob = store.getState().noobs[0];
    const props = {
      noobPoints: noob.noobPoints,
      assassinPoints: noob.assassinPoints,
      outOfAction: noob.outOfAction,
      onNoobClick: () => store.dispatch(noobActions.addNoobPoint(noob.id)),
      onAssassinClick: () => store.dispatch(noobActions.addAssassinPoint(noob.id))
    };

    const wrapper = mount(<Provider store={store}><NoobRow {...props} /></Provider>);

    const noobPointButton = wrapper.find('.noob').first();
    noobPointButton.simulate('click');
    expect(store.getState().noobs[0].noobPoints).toEqual(1);

    const assassinPointButton = wrapper.find('.assassin').first();
    assassinPointButton.simulate('click');
    assassinPointButton.simulate('click');
    expect(store.getState().noobs[0].assassinPoints).toEqual(2);
  });
});
