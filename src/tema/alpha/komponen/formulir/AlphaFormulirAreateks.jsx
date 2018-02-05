import React from 'react'
import AlphaBaris from "../tampilan/AlphaBaris";
import AlphaFormulirTeks from "./AlphaFormulirTeks";
import AlphaKolom from "../tampilan/AlphaKolom";
import AlphaBarisKolom from "../tampilan/AlphaBarisKolom";
import AlphaGaris from "../tampilan/AlphaGaris";
import AlphaBr from "../tampilan/AlphaBr";
class AlphaFormulirAreateks extends React.Component{
  render(){
    const nilai=this.props.children;
    const perubahan=this.props.perubahan;
    return(
      <textarea
        value={nilai}
        onChange={(e)=>{
          perubahan(e.target.value)
        }}
        placeholder=""
        rows="6"/>
    )
  }
}
export default AlphaFormulirAreateks