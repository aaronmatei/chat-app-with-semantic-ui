import React, { Component } from 'react';
import { Sidebar, Menu, Divider, Button } from 'semantic-ui-react';

class ColorPanel extends Component {
  render() {
    return (
      <Sidebar
        as={Menu}
        icon='labelled'
        inverted
        vertical
        visible
        width='very thin'
      >
        <Divider />
        <Button />
      </Sidebar>
    );
  }
}

export default ColorPanel;
