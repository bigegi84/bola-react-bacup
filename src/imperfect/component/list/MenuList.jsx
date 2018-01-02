import React from 'react'
import Menu from '../view/Menu'
import {Url} from "../../../config";
class Index extends React.Component{
  render(){
    const list=this.props.data.map((item, index) => {
      return (
        <Menu
          data={item}
          key={index}
        />
      )
    });
    return (
      <ul>
      {list}
      </ul>
    )
  }
}
export default Index