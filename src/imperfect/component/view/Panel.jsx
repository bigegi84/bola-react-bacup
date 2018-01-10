import React from 'react'
export default class Panel extends React.Component{
  render(){
    return (
      <div
        className="12u$">
        <div
          className="post"
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}