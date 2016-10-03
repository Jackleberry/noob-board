import React, { PropTypes } from 'react';
import noobActions from '../actions/noob';

const AddNoob = (props, { store }) => {
  let input;
  return (
    <div className="input-group">
      <input className="form-control" ref={node => {
          input = node;
        }}
      />
      <span className="input-group-btn">
        <button type="button" className="btn btn-default" onClick={() => {
          store.dispatch(noobActions.addNoob(input.value));
          input.value = '';
          input.focus();
          }}>
          Add Noob
        </button>
      </span>
    </div>
  );
};

AddNoob.contextTypes = {
  store: PropTypes.object.isRequired
};

export default AddNoob;
