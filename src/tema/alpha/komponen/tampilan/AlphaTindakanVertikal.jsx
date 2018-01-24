import React from 'react'
class AlphaTindakanVertikal extends React.Component{
  render(){
    return(
      <ul className="actions vertical">
        {this.props.children}
      </ul>
    )
  }
}
export default AlphaTindakanVertikal