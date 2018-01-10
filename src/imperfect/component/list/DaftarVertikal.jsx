import React from 'react'
export default class DaftarVertikal extends React.Component{
  render(){
    return (
      <ul className="actions vertical">
        {this.props.children}
      </ul>
    )
  }
}