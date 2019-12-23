import React, { Component } from 'react';
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from 'semantic-ui-react';

export class Register extends Component {
  state = {};
  handleChange = () => {};
  render() {
    return (
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' icon color='orange' textAlign='center'>
            <Icon name='puzze piece' color='orange' />
            Register for DevChat
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                name='username'
                type='text'
                icon='user'
                iconPosition='left'
                placeholder='Username'
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                name='email'
                type='email'
                icon='mail'
                iconPosition='left'
                placeholder='Email'
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                name='password'
                type='password'
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                name='password'
                type='password'
                icon='repeat'
                iconPosition='left'
                placeholder='Password'
                onChange={this.handleChange}
              />
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
