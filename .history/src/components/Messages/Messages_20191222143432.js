import React, { Component, Fragment } from 'react';
import { Segment, Comment } from 'semantic-ui-react';
import firebase from '../../firebase';
import MessagesHeader from './MessagesHeader';
import MessageForm from './MessageForm';

class Messages extends Component {
  state = {
    messagesRef: firebase.database().ref('messages')
  };
  render() {
    return (
      <Fragment>
        <MessagesHeader />
        <Segment>
          <Comment.Group className='messages'>{/* messages */}</Comment.Group>
        </Segment>
        <MessageForm />
      </Fragment>
    );
  }
}

export default Messages;
