import React from 'react'
import AlphaBaris from "./AlphaBaris";
export default class AlphaLabel extends React.Component{
  render(){
    return(
      <AlphaBaris
        lebar='12u'
      >
        <p>Ini Label</p>
        {this.props.children}
      </AlphaBaris>
    )
  }
}