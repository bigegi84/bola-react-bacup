import React from 'react'
class AlphaKolom extends React.Component{
  render(){
    const kelas=this.props.kelas;
    return(
      <div
        className={kelas}
      >
        {this.props.children}
      </div>
    )
  }
}
export default AlphaKolom