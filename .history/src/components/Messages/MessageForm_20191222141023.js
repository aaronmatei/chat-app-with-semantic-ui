import React, { Component } from 'react';
import { Segment, Button, Input } from 'semantic-ui-react';

class MessageForm extends Component {
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
        />
      </Segment>
    );
  }
}

export default MessageForm;
