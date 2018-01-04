import React from 'react'
import mobx,{observable} from "mobx";
import {inject} from "mobx-react";
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './redux/components/App'
import reducer from './redux/reducer'
import ImperfectRoute from "./imperfect/component/ImperfectRoute";
import Store from "./mobx/Store";
import Singleton from "./singleton/Singleton"
import mobxStore from './mobx/mobxStore'
import ApiHelper from "./json/ApiHelper";
const store = createStore(reducer)
// render(
//   <Provider store={store}>
//     <ImperfectRoute />
//   </Provider>,
//   document.getElementById('root')
// );
ApiHelper.getJudul();
render(
  <ImperfectRoute />,
  document.getElementById('root')
);