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
// import reducer
import rootReducer from './reducers';
import { setUser } from './actions';
// creating store
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools());
// class starts here
class Root extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // console.log(user);
        this.props.setUser(user);
        this.props.history.push('/');
      }
    });
  }
  render() {
    return this.props.isLoading? : <Spinner />: (
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    );
  }
}

const mapStateFromProps = state => ({
  isLoading: state.user.isLoading
});

const RootWithAuth = withRouter(connect(mapStateFromProps, { setUser })(Root));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithAuth />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
