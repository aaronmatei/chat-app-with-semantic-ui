import React, { Component } from 'react';
import { Sidebar, Menu, Divider, Button } from 'semantic-ui-react';

class ColorPanel extends Component {
  render() {
    return <Sidebar as={Menu} icon='labelled'></Sidebar>;
  }
}

export default ColorPanel;
