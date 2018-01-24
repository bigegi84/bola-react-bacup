import React from 'react'
import {Link} from "react-router-dom";
class AlphaTautanTombolPasSpesial extends React.Component{
  render(){
    return(
      <Link
        to=""
        className="button special fit"
      >
        {this.props.children}
      </Link>
    )
  }
}
export default AlphaTautanTombolPasSpesial