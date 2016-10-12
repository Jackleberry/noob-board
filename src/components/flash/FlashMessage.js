import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class FlashMessage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, type } = this.props.message;
    return(
      <div className={classnames("alert", {
        'alert-success': type == "success",
        'alert-danger': type == "failure"
      })}>
        {text}
      </div>
    );
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired
};


export default FlashMessage;
