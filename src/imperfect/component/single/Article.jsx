import React from 'react'

class Index extends React.Component{
  render(){
    const data=this.props.data;
    return(
      <article className="post">
        <header>
          <div className="title">
            <h2>{data.judul}</h2>
            <p>{data.deskripsi}</p>
          </div>
          <div className="meta">
            <time className="published" dateTime="2015-11-01">{data.waktu}</time>
          </div>
        </header>
        <p>{data.konten}</p>
      </article>
    )
  }
}
export default Index