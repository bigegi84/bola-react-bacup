import React from 'react'

class Index extends React.Component{
  render(){
    const data=this.props.data;
    return(
      <article className="post">
        <header>
          <div className="title">
            <h2>{data.nama}</h2>
            <p>{data.email}</p>
          </div>
          <div className="meta">
            <time className="published" dateTime="2015-11-01">{data.waktu}</time>
            {/*<a href="#" className="author"><span className="name">Jane Doe</span><img src="images/avatar.jpg" alt="" /></a>*/}
          </div>
        </header>
        {/*<a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>*/}
        <p>{data.konten}</p>
      </article>
    )
  }
}
export default Index