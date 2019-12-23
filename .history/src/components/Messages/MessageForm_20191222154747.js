import React, { Component } from 'react';
import { Segment, Button, Input } from 'semantic-ui-react';
import firebase from '../../firebase';

class MessageForm extends Component {
  state = {
    message: '',
    channel: this.props.currentChannel,
    user: this.props.currentUser,
    loading: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createMessage = () => {
    const message = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: this.state.user.uid,
        name: this.state.user.displayName,
        avatar: this.state.user.photoURL
      },
      content: this.state.message
    };
    return message;
  };
  sendMessage = () => {
    const { messagesRef } = this.props;
    const { message, channel } = this.state;
    if (message) {
      this.setState({ loading: true });
      messagesRef
        .child(channel.id)
        .push()
        .set(this.createMessage())
        .then();
    }
  };
  render() {
    return (
      <Segment className='message__form'>
        <Input
          fluid
          name='message'
          style={{ marginBottom: '0.7em' }}
          label={<Button icon={'add'} />}
          labelPosition='left'
          placeholder='Write your message'
          onChange={this.handleChange}
        />
        <Button.Group icon widths='2'>
          <Button
            color='orange'
            content='Add Reply'
            labelPosition='left'
            icon='edit'
          />
          <Button
            color='teal'
            content='Upload Media'
            labelPosition='right'
            icon='cloud upload'
          />
        </Button.Group>
      </Segment>
    );
  }
}

export default MessageForm;
