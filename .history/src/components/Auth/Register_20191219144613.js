import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from 'semantic-ui-react';

import firebase from '../../firebase';

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email);
  };
  render() {
    const { username, email, password, confirmPassword } = this.state;
    return (
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' icon color='orange' textAlign='center'>
            <Icon name='puzzle piece' color='orange' />
            Register for DevChat
          </Header>
          <Form onSubmit={this.handleSubmit} size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                name='username'
                type='text'
                icon='user'
                iconPosition='left'
                placeholder='Username'
                value={username}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                name='email'
                type='email'
                icon='mail'
                iconPosition='left'
                placeholder='Email'
                value={email}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                name='password'
                type='password'
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                value={password}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                name='confirmPassword'
                type='password'
                icon='repeat'
                iconPosition='left'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={this.handleChange}
              />
              <Button color='orange' fluid size='large'>
                Submit
              </Button>
            </Segment>
          </Form>
          <Message>
            Already a user?<Link to='/login'> Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
