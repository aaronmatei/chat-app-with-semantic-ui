import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';

class UserPanel extends Component {
  render() {
    return (
      <Grid style={{ background: '#483D8B' }}>
        <Grid.Column>
          <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
            <Header inverted floated='left' as='h2'>
              <Header.Content>Real OGs Chatroom</Header.Content>
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserPanel;
