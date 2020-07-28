import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from '../components/Message';

class MessageList extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map(message => (
          <Message message={message} key={message.content} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
  };
};

export default connect(mapStateToProps)(MessageList);
