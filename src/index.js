import React from 'react'
import ReactDOM from 'react-dom'
import ApiHelper from "./helper/ApiHelper";
import App from "./App";
ApiHelper.getJudul();
ReactDOM.render(
  <App/>,
  document.documentElement.parentNode
);