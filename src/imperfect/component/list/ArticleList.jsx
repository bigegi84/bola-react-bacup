import React from 'react'
import ArticleSmall from '../view/ArticleSmall'
class Index extends React.Component{
  render(){
    const list=this.props.data.map((item, index) => {
      return (
        <ArticleSmall
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