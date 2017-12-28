import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import Route from './Route';
import registerServiceWorker from './registerServiceWorker';
// import './theme/now/tether'

ReactDOM.render(<Route/>, document.getElementById('root'));
registerServiceWorker();
