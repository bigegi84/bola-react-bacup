import React from 'react'
import AlphaKolom from "./AlphaKolom";
import AlphaBaris from "./AlphaBaris";
class AlphaBarisKolom extends React.Component{
  render(){
    return(
      <AlphaBaris>
        <AlphaKolom
          lebar='12'
        >
          {this.props.children}
        </AlphaKolom>
      </AlphaBaris>
    )
  }
}
export default AlphaBarisKolom