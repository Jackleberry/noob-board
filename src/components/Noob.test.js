import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import noobs from '../reducers/Noobs';
import visibilityFilter from '../reducers/VisibilityFilter';
import expect from 'expect';
import { mount } from 'enzyme';
import noobActions from '../actions/noob';
import Noob from './NoobRow';

const store = createStore(combineReducers({
  noobs,
  visibilityFilter
}), window.devToolsExtension && window.devToolsExtension());

describe('Noob component', () => {
  it('should render the Noob component', () => {
    store.dispatch(noobActions.addNoob("noob"));
    const noob = store.getState().noobs[0];
    const props = {
      noobPoints: noob.noobPoints,
      assassinPoints: noob.assassinPoints,
      outOfAction: noob.outOfAction,
      onRemoveClick: () => store.dispatch(noobActions.toggleNoob(noob.id)),
      onNoobClick: () => store.dispatch(noobActions.addNoobPoint(noob.id)),
      onAssassinClick: () => store.dispatch(noobActions.addAssassinPoint(noob.id))
    };

    const wrapper = mount(<Provider store={store}><Noob {...props} /></Provider>);

    const noobPointButton = wrapper.find('.noob').first();
    noobPointButton.simulate('click');
    expect(store.getState().noobs[0].noobPoints).toEqual(1);

    const assassinPointButton = wrapper.find('.assassin').first();
    assassinPointButton.simulate('click');
    assassinPointButton.simulate('click');
    expect(store.getState().noobs[0].assassinPoints).toEqual(2);
  });
});
