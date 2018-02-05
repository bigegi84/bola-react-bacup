import React from 'react'
class AlphaTombolSpesial extends React.Component{
  render(){
    const diKllik=this.props.diKlik;
    return(
      <button
        onClick={diKllik}
        className="button special"
      >
        {this.props.children}
      </button>
    )
  }
}
export default AlphaTombolSpesial