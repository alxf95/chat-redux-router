import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// import { createHistory as history } from 'history';

import App from './components/App';

import channelsReducer from './reducers/channelsReducer';
import currentUserReducer from './reducers/currentUserReducer';
import messagesReducer from './reducers/messagesReducer';
import selectedChannelReducer from './reducers/selectedChannelReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

const reducers = combineReducers({
  channels: channelsReducer,
  messages: messagesReducer,
  currentUser: currentUserReducer,
  selectedChannel: selectedChannelReducer,
});

const initialState = {
  channels: ['general', 'react', 'london'],
  currentUser:
    // prompt('What is your username?') ||
    `anonymous${Math.floor(10 + Math.random() * 90)}`,
  selectedChannel: 'general',
};

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <BrowserRouter>
      <Switch>
        <Route path="/:channel" component={App} />
        <Redirect from="/" to="/general" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  root
);
