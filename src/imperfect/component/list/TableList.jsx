import React from 'react'
import ArticleSmall from '../view/ArticleSmall'
import Table from "../view/Table";
class Index extends React.Component{
  render(){
    const list=this.props.data.map((item, index) => {
      return (
        <Table
          data={item}
          key={index}
        />
      )
    });
    let header=[];
    for(let name in this.props.data[0]) {
      header.push(<th>{name}</th>)
    }
    return (
      <table>
        <tr>
          {header}
        </tr>
        {list}
      </table>
    )
  }
}
export default Index