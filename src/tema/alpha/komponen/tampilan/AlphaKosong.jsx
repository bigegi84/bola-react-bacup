import React from 'react'
import AlphaKolom from "./AlphaKolom";
class AlphaKosong extends React.Component{
  render(){
    return(
      <AlphaKolom
        lebar="8"
      >
        {this.props.children}
      </AlphaKolom>
    )
  }
}
export default AlphaKosong