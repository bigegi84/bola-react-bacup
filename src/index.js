import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './redux/components/App'
import reducer from './redux/reducer'
import ImperfectRoute from "./imperfect/component/ImperfectRoute";
const store = createStore(reducer)
// render(
//   <Provider store={store}>
//     <ImperfectRoute />
//   </Provider>,
//   document.getElementById('root')
// );
render(
  <ImperfectRoute />,
  document.getElementById('root')
);