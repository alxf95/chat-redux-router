import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectChannel } from '../actions';

class Channel extends Component {
  handleClick = () => {
    // console.log(this.props);
    this.props.selectChannel(this.props.channel);
  };

  render() {
    return (
      <div onClick={this.handleClick} className="channel item">
        {this.props.channel}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  bindActionCreators({ selectChannel }, dispatch);
};

const mapStateToProps = state => {
  return {
    selectedChannel: state.selectedChannel,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
