import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import firebase from './firebase';

import registerServiceWorker from './registerServiceWorker';
// css
import './index.css';
// semantic ui css
import 'semantic-ui-css/semantic.min.css';
// components
import App from './components/App';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';

class Root extends Component {
  componentDidMount() {
    if (user) {
      this.props.history.push('/');
    }
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    );
  }
}

const RootWithAuth = withRouter(Root);

ReactDOM.render(
  <Router>
    <Root />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
