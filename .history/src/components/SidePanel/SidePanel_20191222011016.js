import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import UserPanel from './UserPanel';
import Channels from './Channels';

class SidePanel extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <Menu
        size='large'
        inverted
        fixed='left'
        vertical
        style={{ fontSize: '1.1rem' }}
      >
        <UserPanel currentUser={currentUser} />
        <Channels style={{ background: '#48D1CC' }} />
      </Menu>
    );
  }
}

export default SidePanel;
