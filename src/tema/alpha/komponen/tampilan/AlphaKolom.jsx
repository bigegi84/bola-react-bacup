import React from 'react'
class AlphaKolom extends React.Component{
  render(){
    const lebar=this.props.lebar;
    return(
      <div
        className={lebar+'u'}
      >
        {this.props.children}
      </div>
    )
  }
}
export default AlphaKolom