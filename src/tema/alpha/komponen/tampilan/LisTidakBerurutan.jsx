import React from 'react'
class LisTidakBerurutan extends React.Component{
  render(){
    return(
      <ul>
        {this.props.children}
      </ul>
    )
  }
}
export default LisTidakBerurutan