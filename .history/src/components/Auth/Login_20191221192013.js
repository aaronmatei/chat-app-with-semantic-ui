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

export class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: [],
    loading: false
  };

 

 

  displayErrors = errors =>
    errors.map((err, idx) => <p key={idx}>{err.message}</p>);

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.isFormValid()) {
      this.setState({ errors: [], loading: true });
      
        .catch(err => {
          console.log(err);
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false
          });
        });
    }
  };

  saveUser = createdUser => {
    return this.state.usersRef.child(createdUser.user.uid).set({
      name: createdUser.user.displayName,
      avatar: createdUser.user.photoURL
    });
  };

  handleInputError = (errors, inputName) => {
    return errors.some(error => error.message.toLowerCase().includes(inputName))
      ? 'error'
      : '';
  };

  render() {
    const {
      username,
      email,
      password,
      confirmPassword,
      errors,
      loading
    } = this.state;
    return (
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h1' icon color='orange' textAlign='center'>
            <Icon name='puzzle piece' color='orange' />
            Login here
          </Header>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
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
                className={this.handleInputError(errors, 'email')}
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
                className={this.handleInputError(errors, 'password')}
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
                className={this.handleInputError(errors, 'password')}
              />
              <Button
                disabled={loading}
                className={loading ? 'loading' : ''}
                color='orange'
                fluid
                size='large'
              >
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

export default Login;
