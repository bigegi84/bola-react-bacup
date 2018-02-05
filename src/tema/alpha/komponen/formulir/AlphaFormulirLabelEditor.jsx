import React from 'react'
import AlphaBaris from "../tampilan/AlphaBaris";
import AlphaFormulirTeks from "./AlphaFormulirTeks";
import AlphaKolom from "../tampilan/AlphaKolom";
import AlphaBarisKolom from "../tampilan/AlphaBarisKolom";
import AlphaGaris from "../tampilan/AlphaGaris";
import AlphaBr from "../tampilan/AlphaBr";
class AlphaFormulirLabelEditor extends React.Component{
  render(){
    const label=this.props.label;
    let nilai=this.props.nilai;
    if(nilai===null){
      nilai=''
    }
    const dalamPerubahan=this.props.dalamPerubahan;
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
            type='text'
            nilai={nilai}
            dalamPerubahan={dalamPerubahan}
          />
        </AlphaBarisKolom>
        <AlphaBr/>
      </AlphaBarisKolom>
    )
  }
}
export default AlphaFormulirLabelEditor