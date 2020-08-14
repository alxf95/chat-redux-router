import React from 'react';

import MessageList from '../containers/MessageList';
import ChannelList from '../containers/ChannelList';
import './app.css';

const App = () => {
  return (
    <div className="ui container">
      <div className="app">
        <div className="left-scene">
          <ChannelList />
        </div>
        <div className="right-scene">
          <MessageList />
        </div>
      </div>
    </div>
  );
};

export default App;
