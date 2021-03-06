import React from 'react';
import { Grid } from 'semantic-ui-react';
// css
import './App.css';
// components
import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';

const App = () => (
  <Grid columns='equal' className='app' style={{ background: '#eee' }}>
    <ColorPanel />
    <SidePanel />
    <Grid.Column>
      <Messages />
    </Grid.Column>
    <MetaPanel />
  </Grid>
);

export default App;
