import React from 'react'
import {Link} from "react-router-dom";
class Index extends React.Component{
  render(){
    const data=this.props.data;
    return(
      <li>
        <Link to={{
          pathname: `/tamu/menu/${data.slug}`,
          location:{
            state: {
              data:data,
              cardDesc: 'Description'
            }
          }
        }}>
          {data.nama}
        </Link>
      </li>
    )
  }
}
export default Index