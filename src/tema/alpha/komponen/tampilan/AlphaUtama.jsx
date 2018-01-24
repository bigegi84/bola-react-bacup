import React from 'react'
import AlphaKolom from "./AlphaKolom";
class AlphaUtama extends React.Component{
  render(){
    return(
      <AlphaKolom
        kelas="8u"
      >
        {this.props.children}
      </AlphaKolom>
    )
  }
}
export default AlphaUtama