import React from 'react'

class Index extends React.Component{
  render(){
    return(
      <li><a href="#">{this.props.title}</a></li>
    )
  }
}
export default Index