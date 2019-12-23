import React, { Component, Fragment } from 'react';
import { Menu, Icon, Modal, Form, Input } from 'semantic-ui-react';

class Channels extends Component {
  state = {
    channels: [],
    channelName: '',
    channelDetails: '',
    modal: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  closeModal = () => this.setState({ modal: false });
  render() {
    const { channels, modal } = this.state;
    return (
      <Fragment>
        <Menu.Menu style={{ paddingBottom: '2em' }}>
          <Menu.Item>
            <span>
              <Icon name='exchange' /> CHANNELS
            </span>
            ({channels.length}) <Icon name='add' />
          </Menu.Item>
        </Menu.Menu>
        <Modal basic open={modal} onClose={this.closeModal}>
          <Modal.Header>Add a Channel</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <Input
                  fluid
                  label='Name of Channel'
                  name='channelName'
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  fluid
                  label='Description of the Channel'
                  name='channelName'
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form>
          </Modal.Content>
        </Modal>
      </Fragment>
    );
  }
}

export default Channels;
