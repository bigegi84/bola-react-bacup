import React from 'react'

class Index extends React.Component{
  render(){
    return(
      <div>
        <h5>{this.props.title}</h5>
        <textarea
          name={this.props.name}
          onChange={(e)=>this.props.change(e)}
        >
          {this.props.value}
        </textarea>
        <br/>
      </div>
    )
  }
}
export default Index