import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectChannel } from '../actions';

class Channel extends Component {
  handleClick = () => {
    this.props.selectChannel(this.props.channel);
  };

  render() {
    const { channel, selectedChannel } = this.props;

    return (
      <div
        onClick={this.handleClick}
        className={`channel item ${
          channel === selectedChannel ? 'active' : ''
        }`}
      >
        {channel}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectChannel }, dispatch);
};

const mapStateToProps = state => {
  return {
    selectedChannel: state.selectedChannel,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
