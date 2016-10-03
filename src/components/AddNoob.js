import React, { PropTypes } from 'react';
import noobActions from '../actions/noob';

const AddNoob = (props, { store }) => {
  let input;
  return (
    <div>
      <input type="text" ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        store.dispatch(noobActions.addNoob(input.value));
        input.value = '';
        input.focus();
        }}>
        Add Noob
      </button>
    </div>
  );
};

AddNoob.contextTypes = {
  store: PropTypes.object.isRequired
};

export default AddNoob;
