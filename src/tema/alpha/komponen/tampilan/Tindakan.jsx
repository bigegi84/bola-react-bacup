import React from 'react'
class Tindakan extends React.Component{
  render(){
    return(
      <li>
        {this.props.children}
      </li>
    )
  }
}
export default Tindakan