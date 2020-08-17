import React from 'react';

import MessageList from '../containers/MessageList';
import ChannelList from '../containers/ChannelList';
import './app.css';

const App = props => {
  return (
    <div className="ui container">
      <div className="app">
        <div className="left-scene">
          <ChannelList channelFromParams={props.match.params.channel} />
        </div>
        <div className="right-scene">
          <MessageList channelFromParams={props.match.params.channel} />
        </div>
      </div>
    </div>
  );
};

export default App;
