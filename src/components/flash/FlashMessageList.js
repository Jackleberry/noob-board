import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FlashMessage from './FlashMessage';

class FlashMessageList extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map(message =>
        <FlashMessage key={message.id} message={message}/>)}
      </div>
    );
  }
}

FlashMessageList.propTypes = {
  messages: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    messages: state.flashMessages
  };
};

export default connect(mapStateToProps)(FlashMessageList);
