import React from 'react'
import ReactDOM from 'react-dom'
import ImperfectRoute from "./imperfect/component/ImperfectRoute";
import ApiHelper from "./helper/ApiHelper";
ApiHelper.getJudul();
ReactDOM.render(
  <ImperfectRoute />,
  document.getElementById('root')
);