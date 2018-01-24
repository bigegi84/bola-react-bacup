import React from 'react'
class AlphaLis extends React.Component{
  render(){
    return(
      <li>
        {this.props.children}
      </li>
    )
  }
}
export default AlphaLis