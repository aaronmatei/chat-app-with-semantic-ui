import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

class Channels extends Component {
  render() {
    return (
      <Menu.Menu style={{ paddingBottom: '2em' }}>
        <Menu.Item>
          <span>
            <Icon name='exchange' /> CHANNELS
          </span>
        </Menu.Item>
      </Menu.Menu>
    );
  }
}

export default Channels;
