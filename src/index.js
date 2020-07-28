import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

import App from './components/App';
import channelsReducer from './reducers/channelsReducer';
import currentUserReducer from './reducers/currentUserReducer';
import messagesReducer from './reducers/messagesReducer';
import selectedChannelReducer from './reducers/channelsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

const reducers = combineReducers({
  channels: channelsReducer,
  messages: messagesReducer,
  currentUser: currentUserReducer,
  selectedChannel: selectedChannelReducer,
});

const initialState = {
  messages: [
    {
      author: 'anonymous92',
      content: 'Hello world!',
      created_at: '2017-09-26T23:03:16.365Z',
    },
    {
      author: 'anonymous77',
      content: 'My name is anonymous77',
      created_at: '2017-09-26T23:03:21.194Z',
    },
  ],
  channels: [],
  currentUser:
    prompt('What is your username?') ||
    `anonymous${Math.floor(10 + Math.random() * 90)}`,
  selectedChannel: 'general',
};

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  root
);
