import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';

const Message = ({ message, user }) => (
  <Comment>
    <Comment.Avatar src={message.user.avatar} />
  </Comment>
);
export default Message;
