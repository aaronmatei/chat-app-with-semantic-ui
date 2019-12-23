import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class SidePanel extends Component {
  render() {
    return <Menu size='large' inverted fixed='left' vertical></Menu>;
  }
}

export default SidePanel;
