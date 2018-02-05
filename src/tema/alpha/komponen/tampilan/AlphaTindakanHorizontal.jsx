import React from 'react'
class AlphaTindakanHorizontal extends React.Component{
  render(){
    const gaya=this.props.gaya;
    return(
      <ul
        style={gaya}
        className="actions">
        {this.props.children}
      </ul>
    )
  }
}
export default AlphaTindakanHorizontal