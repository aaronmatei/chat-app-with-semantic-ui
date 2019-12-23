import React, { Component, Fragment } from 'react';
import { Segment, Comment } from 'semantic-ui-react';

class Messages extends Component {
  render() {
    return (
      <Fragment>
        <MessagesHeader />
        <Segment>
          <Comment.Group className='messages'>{/* messages */}</Comment.Group>
        </Segment>
      </Fragment>
    );
  }
}

export default Messages;
