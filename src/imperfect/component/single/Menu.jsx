import React from 'react'

class Index extends React.Component{
  render(){
    const data=this.props.data;
    return(
      <li><a>{data.nama}</a></li>
    )
  }
}
export default Index