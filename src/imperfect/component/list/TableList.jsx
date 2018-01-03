import React from 'react'
import ArticleSmall from '../view/ArticleSmall'
import Table from "../view/Table";
class Index extends React.Component{
  render(){
    const list=this.props.data.map((item, index) => {
      return (
        <Table
          klikHapus={this.props.klikHapus}
          data={item}
          key={index}
        />
      )
    });
    let header=[];
    let i=0;
    for(let name in this.props.data[0]) {
      header.push(
        <th key={i}>
          {name}
        </th>
      );
      i++
    }
    return (
      <table>
        <thead>
          <tr>
            {header}
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    )
  }
}
export default Index