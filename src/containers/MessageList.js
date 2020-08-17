import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/Message';
import MessageForm from './MessageForm';
import { fetchMessages } from '../actions';
import './message_list.css';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.messageListRef = React.createRef();
  }

  fetchChannelMessages = () => {
    this.props.fetchMessages(this.props.channelFromParams);
  };

  componentDidMount = () => {
    setInterval(this.fetchChannelMessages, 5000);
  };

  componentDidUpdate = prevProps => {
    if (prevProps.messages.length < this.props.messages.length) {
      this.messageListRef.current.scrollTop = this.messageListRef.current.scrollHeight;
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.fetchChannelMessages);
  };

  renderMessages = () => {
    const channelMessages = this.props.messages.filter(message => {
      return message.channel === this.props.channelFromParams;
    });

    if (this.props.messages.length > 0) {
      return channelMessages.map(message => (
        <Message message={message} key={message.id} />
      ));
    }
    return null;
  };

  render() {
    return (
      <div>
        <h2>{this.props.channelFromParams}</h2>
        <div className="ui comments" ref={this.messageListRef}>
          {this.renderMessages()}
        </div>
        <MessageForm channelFromParams={this.props.channelFromParams} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchMessages }, dispatch);
};

const mapStateToProps = state => {
  return {
    messages: state.messages,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
