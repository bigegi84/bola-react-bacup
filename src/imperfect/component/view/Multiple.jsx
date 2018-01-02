import React from 'react'
class Index extends React.Component{
  render(){
    const data=this.props.data;
    return(
      <li>
        <h5>{data.nama}</h5>
        <a
          onClick={() => this.props.delete(this.props.index)}
        >
          delete
        </a>
      </li>
    )
  }
}
export default Index