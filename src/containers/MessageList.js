import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/Message';
import MessageForm from '../containers/MessageForm';
import { fetchMessages } from '../actions';
import './MessageList.css';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.messageListRef = React.createRef();
  }

  fetchChannelMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  };

  componentDidMount = () => {
    setInterval(this.fetchChannelMessages, 3000);
  };

  componentDidUpdate = prevProps => {
    if (prevProps.messages.length < this.props.messages.length) {
      this.messageListRef.current.scrollTop = this.messageListRef.current.scrollHeight;
    }
  };

  renderMessages = () => {
    const channelMessages = this.props.messages.filter(message => {
      return message.channel === this.props.selectedChannel;
    });

    console.log(channelMessages);

    if (this.props.messages.length > 0) {
      return channelMessages.map(message => (
        <Message message={message} key={message.id} />
      ));
    }
    return null;
  };

  componentWillUnmount = () => {
    clearInterval(this.fetchChannelMessages);
  };

  render() {
    return (
      <div>
        <div className="ui comments" ref={this.messageListRef}>
          {this.renderMessages()}
        </div>
        <MessageForm />
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
    selectedChannel: state.selectedChannel,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
