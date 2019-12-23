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
  render() {
    return (
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' icon color='orange' textAlign='center'>
            <Icon name='puzze piece' color='orange' />
            Register for DevChat
          </Header>
          <Form size='large'>
            <Segment stacked></Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
