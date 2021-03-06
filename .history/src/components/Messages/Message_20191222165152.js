import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';

const isOwnMessage = (message, user) => {
  return message.user.id === user.uid ? 'message__self' : ' ';
};

const Message = ({ message, user }) => (
  <Comment>
    <Comment.Avatar src={message.user.avatar} />
    <Comment.Content className={isOwnMessage(message, user)}>
      <Comment.Author>{message.user.name}</Comment.Author>
    </Comment.Content>
  </Comment>
);
export default Message;
