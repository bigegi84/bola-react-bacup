import React from 'react'
class AlphaFormulirTeks extends React.Component{
  render(){
    const perubahan=this.props.perubahan;
    const anak=this.props.children;
    const tipe=this.props.tipe;
    return(
      <input
        onChange={(e)=>{
          perubahan(e.target.value)
        }}
        type={tipe}
        value={anak}
        placeholder=""
      />
    )
  }
}
export default AlphaFormulirTeks