import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectChannel } from '../actions';
import Channel from './Channel';
import './ChannelList.css';

class ChannelList extends Component {
  handleClick = () => {
    this.props.selectChannel('london');
  };

  render() {
    return (
      <div className="channel-list">
        <div className="ui list">
          {this.props.channels.map(channel => (
            <div className="channel" onClick={this.handleClick}>
              {channel}
            </div>
            // <Channel className="item" channel={channel} key={channel} />
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  bindActionCreators({ selectChannel }, dispatch);
};

const mapStateToProps = state => {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
