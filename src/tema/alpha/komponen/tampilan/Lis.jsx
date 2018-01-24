import React from 'react'
class Lis extends React.Component{
  render(){
    return(
      <li>
        {this.props.children}
      </li>
    )
  }
}
export default Lis