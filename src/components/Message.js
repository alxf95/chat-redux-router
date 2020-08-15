import React, { Component } from 'react';
import Emojify from 'react-emojione';

import './message.css';

class Message extends Component {
  getUserColour = str => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let j = 0; j < 3; j++) {
      let value = (hash >> (j * 8)) & 0xff;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  };

  render() {
    const { created_at, author, content } = this.props.message;

    const date = new Date(created_at);

    return (
      <div className="comment">
        <div className="content">
          <p
            className="author creator"
            style={{ color: this.getUserColour(author) }}
          >
            {author}
            {'  '}
            <em className="time">
              - {date.getHours()}:{date.getMinutes()}
            </em>
          </p>
          <Emojify>
            <span>{content}</span>
          </Emojify>
        </div>
      </div>
    );
  }
}

export default Message;
