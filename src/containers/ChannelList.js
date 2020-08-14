import React, { Component } from 'react';
import { connect } from 'react-redux';

import Channel from './Channel';
import './channel_list.css';

class ChannelList extends Component {
  render() {
    return (
      <div className="channel-list">
        <div className="ui list">
          {this.props.channels.map(channel => (
            <Channel className="item" channel={channel} key={channel} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    channels: state.channels,
  };
};

export default connect(mapStateToProps)(ChannelList);
