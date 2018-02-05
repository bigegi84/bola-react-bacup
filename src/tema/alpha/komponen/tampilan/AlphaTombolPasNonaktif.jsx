import React from 'react'
class AlphaTombolPasNonaktif extends React.Component{
  render(){
    return(
      <a
        className="button fit disabled"
      >
        {this.props.children}
      </a>
    )
  }
}
export default AlphaTombolPasNonaktif