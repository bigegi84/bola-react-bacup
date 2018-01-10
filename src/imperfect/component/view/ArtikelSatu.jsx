import React from 'react'
import {Link} from "react-router-dom";
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
              <img
                src={data.manusia.gambar.url}
                alt=""
              />
            </a>
          </div>
        </header>
        <p
          style={style.p}
        >
          {data.konten}
        </p>
        <footer>
          <ul className="stats">
            <li>
              <Link
                to={'/tamu/menu/'+data.menu.slug}
              >{data.menu.nama}</Link></li>
            <li>
              <a
                className="icon fa-heart"
              >
                -
              </a>
            </li>
            <li>
              <a
                className="icon fa-comment"
              >
                -
              </a>
            </li>
            <li>
              <a
                className="icon fa-eye"
              >
                {data.dilihat}
              </a>
            </li>
          </ul>
        </footer>
      </article>
    )
  }
}
