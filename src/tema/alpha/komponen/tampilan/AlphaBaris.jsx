import React from 'react'
import AlphaKolom from "./AlphaKolom";
export default class AlphaBaris extends React.Component{
  render(){
    return(
      <div
        className="row"
      >
        {this.props.children}
      </div>
    )
  }
}