import React from 'react';
import './message.css';

const Message = props => {
  const date = new Date(props.message.created_at);
  return (
    <div className="comment">
      <div className="content">
        <p className="author creator">
          {props.message.author}
          {'  '}
          <em className="time">
            - {date.getHours()}:{date.getMinutes()}
          </em>
        </p>
        <div className="text">{props.message.content}</div>
      </div>
    </div>
  );
};

export default Message;
