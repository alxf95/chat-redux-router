import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectChannel } from '../actions';

class Channel extends Component {
  handleClick = () => {
    this.props.selectChannel(this.props.channel);
  };

  render() {
    return (
      <div
        onClick={this.handleClick}
        className={`channel item ${
          this.props.channel === this.props.selectedChannel ? 'active' : ''
        }`}
      >
        {this.props.channel}
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
