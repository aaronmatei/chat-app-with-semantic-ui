import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
  <Router>
    <Switch>
      <Route path='/' component={App} />
      <Route path='/login' component={App} />
      <Route path='/register' component={App} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
