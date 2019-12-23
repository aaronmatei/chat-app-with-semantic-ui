import React, { Component, Fragment } from 'react';
import { Segment, Comment } from 'semantic-ui-react';
import firebase from '../../firebase';
import MessagesHeader from './MessagesHeader';
import MessageForm from './MessageForm';

class Messages extends Component {
  state = {
    messagesRef: firebase.database().ref('messages'),
    channel: this.props.currentChannel,
    user: this.props.currentUser
  };

  componentDidMount() {
    const { channel, user } = this.state;
    if (channel && user) {
    }
  }

  render() {
    const { messagesRef, channel, user } = this.state;
    return (
      <Fragment>
        <MessagesHeader />
        <Segment>
          <Comment.Group className='messages'>{/* messages */}</Comment.Group>
        </Segment>
        <MessageForm
          messagesRef={messagesRef}
          currentChannel={channel}
          currentUser={user}
        />
      </Fragment>
    );
  }
}

export default Messages;
