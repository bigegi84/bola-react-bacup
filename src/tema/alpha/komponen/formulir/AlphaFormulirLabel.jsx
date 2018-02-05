import React from 'react'
import AlphaBaris from "../tampilan/AlphaBaris";
import AlphaFormulirTeks from "./AlphaFormulirTeks";
import AlphaKolom from "../tampilan/AlphaKolom";
import AlphaBarisKolom from "../tampilan/AlphaBarisKolom";
import AlphaGaris from "../tampilan/AlphaGaris";
import AlphaBr from "../tampilan/AlphaBr";
class AlphaFormulirLabel extends React.Component{
  render(){
    const label=this.props.label;
    return(
      <AlphaBarisKolom
        lebar='12'
      >
        <AlphaBarisKolom
          lebar='12'
        >
          <p>{label}</p>
        </AlphaBarisKolom>
        <AlphaBarisKolom
          lebar='12'
        >
          {this.props.children}
        </AlphaBarisKolom>
        <AlphaBr/>
      </AlphaBarisKolom>
    )
  }
}
export default AlphaFormulirLabel