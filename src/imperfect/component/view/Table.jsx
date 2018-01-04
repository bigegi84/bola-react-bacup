import React from 'react'
import {Link} from "react-router-dom";
class Index extends React.Component{
  render(){
    const data=this.props.data;
    let view=[];
    let i=0;
    for(let name in data) {
      const value = data[name];
      view.push(
        <td key={i}>
          {value}
        </td>
      );
      i++
    }
    return(
      <tr>
        {view}
        <td>
          <button
            onClick={()=>this.props.klikHapus(data[this.props.pk])}
          >
            Delete
          </button>
        </td>
      </tr>
    )
  }
}
export default Index