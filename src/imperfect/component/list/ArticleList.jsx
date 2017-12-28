import React from 'react'
import Article from '../single/Article'

class Index extends React.Component{
  render(){
    const list=this.props.data.map((item, index) => {
      return (
        <Article
          data={item}
          key={index}
        />
      )
    });
    return (<div>
      {list}
    </div>)
  }
}
export default Index