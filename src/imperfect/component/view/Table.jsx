import React from 'react'
import {Link} from "react-router-dom";
class Index extends React.Component{
  render(){
    const data=this.props.data;
    let view=[];
    for(let name in data) {
      const value = data[name];
      view.push(<td>{value}</td>)
    }
    return(
      <tr>
        {view}
      </tr>
    )
  }
}
export default Index