import React, { PropTypes } from 'react';

let nextId = 0;
const AddNoob = ({store}) => {
  let input;
  return (
    <div>
      <input type="text" ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        store.dispatch({
          type: "ADD_NOOB",
          id: nextId++,
          name: input.value
        });
        input.value = '';
        input.focus();
        }}>
        Add Noob
      </button>
    </div>
  );
};

AddNoob.propTypes = {
  store: PropTypes.object.isRequired
};

export default AddNoob;
