import React from 'react'
import AlphaBaris from "../tampilan/AlphaBaris";
import AlphaFormulirTeks from "./AlphaFormulirTeks";
import AlphaKolom from "../tampilan/AlphaKolom";
import AlphaBarisKolom from "../tampilan/AlphaBarisKolom";
import AlphaGaris from "../tampilan/AlphaGaris";
import AlphaBr from "../tampilan/AlphaBr";
export default class AlphaFormulirLabelTeks extends React.Component{
  render(){
    const label=this.props.label;
    let nilai=this.props.nilai;
    const tipe=this.props.tipe;
    if(nilai===null){
      nilai=''
    }
    const perubahan=this.props.perubahan;
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
          <AlphaFormulirTeks
            tipe={tipe}
            nilai={nilai}
            perubahan={perubahan}
          />
        </AlphaBarisKolom>
        <AlphaBr/>
      </AlphaBarisKolom>
    )
  }
}