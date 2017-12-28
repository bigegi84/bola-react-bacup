import React from 'react'

class Index extends React.Component{
  render(){
    return(
      <div>
        <h5>{this.props.title}</h5>
        <input
          type="text"
          name={this.props.name}
          onChange={(e)=>this.props.change(e)}
        />
        <br/>
      </div>
    )
  }
}
export default Index