import React, { Component } from 'react';
import { Grid, Header, Icon, Dropdown } from 'semantic-ui-react';
import firebase from '../../firebase';
import { connect } from 'react-redux';

class UserPanel extends Component {
  state = {
    user: null
  };

  dropdownOptions = () => [
    {
      key: 'user',
      text: (
        <span>
          Signed in as <strong>User</strong>
        </span>
      ),
      disabled: true
    },
    {
      key: 'avatar',
      text: <span>Change Avatar</span>
    },
    {
      key: 'signout',
      text: <span onClick={this.handleSignOut}>Sign Out</span>
    }
  ];

  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('Signed out!'));
  };
  render() {
    console.log(this.props.currentUser);
    return (
      <Grid style={{ background: '#483D8B' }}>
        <Grid.Column>
          <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
            <Header inverted floated='left' as='h2'>
              <Icon name='gem' />
              <Header.Content>Real OGs Chatroom</Header.Content>
            </Header>
          </Grid.Row>
          <Header style={{ padding: '0.25em' }} as='h4' inverted floated='left'>
            <Dropdown
              trigger={<span>user</span>}
              options={this.dropdownOptions()}
            />
          </Header>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(UserPanel);
