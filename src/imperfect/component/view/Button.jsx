import React from 'react'

class Index extends React.Component{
  render(){
    return(
      <div>
        <button
          onClick={(e)=>this.props.handler(e)}
        >{this.props.title}</button>
        <br/>
      </div>
    )
  }
}
export default Index