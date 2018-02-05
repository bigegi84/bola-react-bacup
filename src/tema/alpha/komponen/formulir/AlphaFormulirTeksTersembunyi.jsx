import React from 'react'
class AlphaFormulirTeksTersembunyi extends React.Component{
  render(){
    const dalamPerubahan=this.props.dalamPerubahan;
    const nilai=this.props.nilai;
    return(
      <input
        onChange={(e)=>{
          dalamPerubahan(e)
        }}
        type="text"
        name="name"
        value={nilai}
        placeholder=""
      />
    )
  }
}
export default AlphaFormulirTeksTersembunyi