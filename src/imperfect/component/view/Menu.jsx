import React from 'react'
import {Link} from "react-router-dom";
class Index extends React.Component{
  render(){
    const data=this.props.data;
    return(
      <li>
        <Link to={`/tamu/menu/${data.slug}`} replace>
          {data.nama}
        </Link>
      </li>
    )
  }
}
export default Index