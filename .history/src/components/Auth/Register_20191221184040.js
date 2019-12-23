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
    confirmPassword: '',
    errors: [],
    loading: false
  };
  isFormValid = () => {
    let errors = [];
    let error;
    if (this.isFormEmpty(this.state)) {
      error = { message: 'Fill in all the form fields' };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: 'Password is invalid' };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      // form is valid
      return true;
    }
  };
  isFormEmpty = ({ username, email, password, confirmPassword }) => {
    return (
      !username.length ||
      !email.length ||
      !password.length ||
      !confirmPassword.length
    );
  };

  isPasswordValid = ({ password, confirmPassword }) => {
    if (password.length < 6 || confirmPassword.length < 6) {
      return false;
    } else if (password !== confirmPassword) {
      return false;
    } else {
      return true;
    }
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
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(createdUser => {
          console.log(createdUser);
          this.setState({ loading: false });
        })
        .catch(err => {
          console.log(err);
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false
          });
        });
    }
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
          <Header as='h2' icon color='orange' textAlign='center'>
            <Icon name='puzzle piece' color='orange' />
            Register for DevChat
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
                className={
                  errors.some(error =>
                    error.message.toLowerCase().includes('email')
                  )
                    ? 'error'
                    : ''
                }
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
                className={
                  errors.some(error =>
                    error.message.toLowerCase().includes('email')
                  )
                    ? 'error'
                    : ''
                }
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

export default Register;
