import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class SidePanel extends Component {
  render() {
    return (
      <Menu
        size='large'
        inverted
        fixed='left'
        vertical
        style={{ background: '#4c3c4c' }}
      ></Menu>
    );
  }
}

export default SidePanel;
