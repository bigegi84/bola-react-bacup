import React from 'react'
const style={
  p:{
    textAlign:'justify'
  }
};
export default class ArtikelSatu extends React.Component{
  render(){
    const data=this.props.data;
    return(
      <article className="post">
        <header>
          <div
            className="title"
          >
            <h2>{data.judul}</h2>
            <p
            >
              {data.deskripsi}
            </p>
          </div>
          <div className="meta">
            <time className="published" dateTime="2015-11-01">{data.waktu}</time>
            <a className="author">
              <span className="name">{data.manusia.pengguna}</span>
            </a>
          </div>
        </header>
        <p
          style={style.p}
        >
          {data.konten}
        </p>
      </article>
    )
  }
}
