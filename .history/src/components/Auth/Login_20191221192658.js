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
    if (this.isFormValid(this.state)) {
      this.setState({ errors: [], loading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password);
    }
  };

  isFormValid = ({ email, password }) => email && password;

  handleInputError = (errors, inputName) => {
    return errors.some(error => error.message.toLowerCase().includes(inputName))
      ? 'error'
      : '';
  };

  render() {
    const { email, password, errors, loading } = this.state;
    return (
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h1' icon color='violet' textAlign='center'>
            <Icon name='code branch' color='violet' />
            Login to DevChat
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

              <Button
                disabled={loading}
                className={loading ? 'loading' : ''}
                color='violet'
                fluid
                size='large'
              >
                Submit
              </Button>
            </Segment>
          </Form>
          <Message>
            Dont have an Account?<Link to='/register'> Register here</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
