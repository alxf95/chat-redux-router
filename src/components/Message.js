import React from 'react';

const Message = props => {
  return (
    <div className="comment">
      <div className="content">
        <p className="author creator">{props.message.author}</p>
        <div className="text">{props.message.content}</div>
      </div>
    </div>
  );
};

export default Message;
