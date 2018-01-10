import React from 'react'
import ReactDOM from 'react-dom'
import ImperfectRoute from "./imperfect/component/ImperfectRoute";
import ApiHelper from "./json/ApiHelper";
ApiHelper.getJudul();
ReactDOM.render(
  <ImperfectRoute />,
  document.getElementById('root')
);