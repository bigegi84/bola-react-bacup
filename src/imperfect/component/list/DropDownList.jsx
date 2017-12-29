import React from 'react'
import DropDown from "../view/DropDown";
class Index extends React.Component{
  render(){
    const list=this.props.data.map((item, index) => {
      return (
        <DropDown
          data={item}
          key={index}
        />
      )
    });
    return(
      <select
        name={this.props.name}
        onChange={(e)=>this.props.change(e)}
      >
        {list}
      </select>
    )
  }
}
export default Index