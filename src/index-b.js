import React from 'react';
import ReactDOM from 'react-dom';
import ImperfectRoute from './imperfect/component/ImperfectRoute';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<ImperfectRoute/>, document.getElementById('root'));
registerServiceWorker();
