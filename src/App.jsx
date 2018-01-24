import React from 'react'
import mobxStore from "./mobx/mobxStore";
import ImperfectHtml from "./imperfect/component/ImperfectHtml";
import AlphaHtml from "./tema/alpha/komponen/AlphaHtml";
class App extends React.Component{
  render(){
    mobxStore.tema='alpha';
    // mobxStore.tema='imperfect';
    switch(mobxStore.tema) {
      case "imperfect":
        return(<ImperfectHtml/>);
      case 'alpha':
        return(<AlphaHtml/>);
      default:
        return(<ImperfectHtml/>)
    }
  }
}
export default App