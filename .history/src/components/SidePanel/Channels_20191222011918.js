import React, { Component } from 'react';
import { Menu, Icon, Modal } from 'semantic-ui-react';

class Channels extends Component {
  state = {
    channels: [],
    modal: false
  };
  render() {
    const { channels, modal } = this.state;
    return (
      <Menu.Menu style={{ paddingBottom: '2em' }}>
        <Menu.Item>
          <span>
            <Icon name='exchange' /> CHANNELS
          </span>{' '}
          ({channels.length}) <Icon name='add' />
        </Menu.Item>
      </Menu.Menu>
      <Modal>

      </Modal>
    );
  }
}

export default Channels;
