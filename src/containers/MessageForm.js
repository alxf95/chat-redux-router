import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount = () => {
    this.messageBox.focus();
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.value !== '') {
      this.props.createMessage(
        this.props.channelFromParams,
        this.props.currentUser,
        this.state.value
      );
    }
    this.setState({ value: '' });
  };

  render() {
    return (
      <form className="ui action input" onSubmit={this.handleSubmit}>
        <input
          ref={input => {
            this.messageBox = input;
          }}
          placeholder="Post message..."
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="ui button" type="submit" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    messages: state.messages,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createMessage }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
