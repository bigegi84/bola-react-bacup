import React from 'react'
import mobxStore from "./mobx/mobxStore";
import ImperfectHtml from "./imperfect/component/ImperfectHtml";
import AlphaHtml from "./tema/alpha/komponen/AlphaHtml";
import PagesHtml from "./tema/pages/komponen/PagesHtml";
import AlphaRute from "./tema/alpha/komponen/rute/AlphaRute";
class App extends React.Component{
  render(){
    mobxStore.tema='alpha';
    // mobxStore.tema='imperfect';
    // mobxStore.tema='pages';
    switch(mobxStore.tema) {
      case "imperfect":
        return(<ImperfectHtml/>);
      case 'alpha':
        return(<AlphaHtml/>);
      case 'pages':
        return(<PagesHtml/>);
      default:
        return(<ImperfectHtml/>)
    }
  }
}
export default App