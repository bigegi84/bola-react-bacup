import React from 'react'
class AlphaTombolPasSpesial extends React.Component{
  render(){
    const diKlik=this.props.diKlik;
    return(
      <button
        onClick={diKlik}
        className="button special fit"
      >
        {this.props.children}
      </button>
    )
  }
}
export default AlphaTombolPasSpesial