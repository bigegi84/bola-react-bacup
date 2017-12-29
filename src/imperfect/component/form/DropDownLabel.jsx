import React from 'react'
import DropDownList from "../list/DropDownList";
class Index extends React.Component{
  render(){
    return(
      <div>
        <h5>{this.props.title}</h5>
        <DropDownList
          name={this.props.name}
          change={(e)=>this.props.change(e)}
          data={this.props.data}
        />
        <br/>
      </div>
    )
  }
}
export default Index