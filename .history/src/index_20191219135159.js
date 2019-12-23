import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
  <Router>
    <Switch></Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
