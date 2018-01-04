import React from 'react'
import {Link} from "react-router-dom";
const style={
  p:{
    textAlign:'justify'
  }
};
class ArticleSmall extends React.Component{
  render(){
    const pk=this.props.pk;
    const klikUbah=this.props.klikUbah;
    const klikHapus=this.props.klikHapus;
    const data=this.props.data;
    const action=this.props.action;
    let actionView=(<div/>);
    if(action){
      actionView=(
        <div>
          <button
            onClick={()=>{
              klikUbah(data['slug'])
            }}
          >
            Ubah
          </button>
          <button
            onClick={()=>{
              klikHapus(data[pk])
            }}
          >
            Hapus
          </button>
        </div>
      )
    }
    let konten=data.konten;
    if(data.konten.length>300){
      konten=data.konten.substring(0,300)+' . . . .'
    }
    return(
      <article className="post">
        <header>
          <div className="title">
            <h2>
              <Link
                to={'/tamu/artikel/'+data.slug}
              >
                {data.judul}
              </Link>
            </h2>
            <p
              style={style.p}
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
        <p>{konten}</p>
        {actionView}
      </article>
    )
  }
}
export default ArticleSmall