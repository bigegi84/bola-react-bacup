import React from 'react'
import {Link} from "react-router-dom";
import BantuanTanggal from "../../../bantuan/BantuanTanggal";
const style={
  p:{
    textAlign:'justify'
  }
};
export default class ArtikelKecil extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    const pk=this.props.pk;
    const klikUbah=this.props.klikUbah;
    const klikHapus=this.props.klikHapus;
    const data=this.props.data;
    const action=this.props.action;
    let gambar=(<div/>);
    if(data.gambar.url!==undefined) {
      gambar=(
        <a className="image featured">
          <img
            src={data.gambar.url}
            alt=""
          />
        </a>
      )
    }
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
    if(konten.length>300){
      konten=data.konten.substring(0,300)+' . . . .'
    }
    return(
      <article className="post">
        <header>
          <div className="title">
            <h2>
              <Link
                to={'/tamu/artikel/satu/'+data.slug}
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
            <time
              className="published"
              dateTime={data.waktu}
            >{BantuanTanggal.waktuYangLalu(data.waktu)}</time>
            <a className="author">
              <span className="name">{data.manusia.pengguna}</span>
              {data.manusia.gambar.url ? (
                <img
                  src={data.manusia.gambar.url}
                />
              ):(
                <div/>
              )}
            </a>
          </div>
        </header>
        {gambar}
        <p>
          {konten}
        </p>
        {actionView}
      </article>
    )
  }
}
ArtikelKecil.defaultProps={
  data:{
    gambar:{
      url:''
    }
  }
};