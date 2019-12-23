import React, { Component } from 'react';
import { Segment, Button, Input } from 'semantic-ui-react';

class MessageForm extends Component {
  state = {
    message: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  sendMessage = () => {
    const { messagesRef } = this.props;
    if (message) {
      // send message
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
