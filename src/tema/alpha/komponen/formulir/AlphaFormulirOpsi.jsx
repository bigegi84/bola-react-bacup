import React from 'react'
class AlphaFormulirOpsi extends React.Component{
  render(){
    let perubahan=this.props.perubahan;
    let anak=this.props.children;
    anak=anak.map((item,indeks)=>{
      return(
        <option
          key={indeks}
          value={item.nilai}>{item.nama}</option>
      )
    });
    return(
      <select
        onChange={(e)=>{
          perubahan(e.target.value)
        }}
      >
        {anak}
      </select>
    )
  }
}
export default AlphaFormulirOpsi