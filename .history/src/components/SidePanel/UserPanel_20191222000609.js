import React, { Component } from 'react';
import { Grid, Header, Icon, Dropdown } from 'semantic-ui-react';

class UserPanel extends Component {
  dropdownOptions = () => [
    {
        key:'user'
      text: (
        <span>
          Signed in as <strong>User</strong>
        </span>
      ),
      disabled: true
    }
  ];
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
          <Header
            style={{ padding: '0.25em' }}
            as='h4'
            inverted
            floated='right'
          >
            <Dropdown
              trigger={<span>User</span>}
              options={this.dropdownOptions()}
            />
          </Header>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserPanel;
