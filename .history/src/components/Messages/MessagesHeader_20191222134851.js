import React, { Component } from 'react';
import { Header, Segment, Input, Icon } from 'semantic-ui-react';

class MessagesHeader extends Component {
  render() {
    return (
      <Segment clearing>
        <Header fluid='true'></Header>
      </Segment>
    );
  }
}

export default MessagesHeader;
