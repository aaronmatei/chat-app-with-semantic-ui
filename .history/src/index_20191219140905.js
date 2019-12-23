import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
// css
import './index.css';
// semantic ui css
// components
import App from './components/App';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
