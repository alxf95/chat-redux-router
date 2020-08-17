import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { selectChannel, fetchMessages } from '../actions';
import './channel_list.css';

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props.channelFromParams);
    if (nextProps.channelFromParams !== this.props.channelFromParams) {
      this.props.fetchMessages(nextProps.channelFromParams);
    }
  }

  renderChannel = channel => {
    return (
      <li
        key={channel}
        className={`channel item ${
          channel === this.props.channelFromParams ? 'active' : null
        }`}
        role="presentation"
      >
        <Link to={`/${channel}`}>{channel}</Link>
      </li>
    );
  };

  render() {
    return (
      <div className="channel-list">
        <ul className="ui ul-list">
          {this.props.channels.map(channel => this.renderChannel(channel))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    channels: state.channels,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
