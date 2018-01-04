import React from 'react'
import ArticleSmall from '../view/ArticleSmall'
export default class ArticleList extends React.Component{
  render(){
    const pk=this.props.pk;
    const klikUbah=this.props.klikUbah;
    const klikHapus=this.props.klikHapus;
    const action=this.props.action;
    const list=this.props.data.map((item, index) => {
      return (
        <ArticleSmall
          pk={pk}
          klikUbah={klikUbah}
          klikHapus={klikHapus}
          action={action}
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