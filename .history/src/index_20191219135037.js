import React from 'react';
import ReactDOM from 'react-dom';
import {} from 'react-router-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
