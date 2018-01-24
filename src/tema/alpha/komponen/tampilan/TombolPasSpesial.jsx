import React from 'react'
import Tindakan from "./Tindakan";
class TombolPasSpesial extends React.Component{
  render(){
    return(
      <a
        className="button special fit"
      >
        {this.props.children}
      </a>
    )
  }
}
export default TombolPasSpesial