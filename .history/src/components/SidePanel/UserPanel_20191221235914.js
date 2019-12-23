import React, { Component } from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

class UserPanel extends Component {
  render() {
    return (
      <Grid style={{ background: '#483D8B' }}>
        <Grid.Column>
          <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
            <Header inverted floated='left' as='h2'>
              <Icon name='gem' />
              <Header.Content>Real OGs Chatroom</Header.Content>
            </Header>
          </Grid.Row>
          <Header style={{ padding: '0.25em' }}></Header>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserPanel;
