import React from 'react'
import AlphaTindakanHorizontal from "./AlphaTindakanHorizontal";
import AlphaLis from "./AlphaLis";
import {Link} from "react-router-dom";
import AlphaBarisKolom from "./AlphaBarisKolom";
class AlphaArtikelKecil extends React.Component{
  render(){
    const aksi=this.props.aksi;
    const url=this.props.url;
    const primer=this.props.primer;
    const judul=this.props.judul;
    const deskripsi=this.props.deskripsi;
    const waktu=this.props.waktu;
    const dilihat=this.props.dilihat;
    const disukai=this.props.disukai;
    const gambarUrl=this.props.gambarUrl;
    const penulis=this.props.penulis;
    const penulisGambarUrl=this.props.penulisGambarUrl;
    return(
      <section className="box">
        <div className="row">
          <div className="12u">
            <div className="row">
              <div className="6u">
                <Link
                  to={url}
                >
                  <h3
                    style={{}}
                  >
                    <b>
                      {judul}
                    </b>
                  </h3>
                </Link>
              </div>
              <div className="6u">
                <div
                  className="row"
                >
                  <div
                    className="8u"
                  >
                    <h5
                      style={{textAlign:'end'}}
                    >
                      {waktu}
                    </h5>
                    <p
                      style={{textAlign:'end'}}
                    >
                      oleh: {penulis}
                    </p>
                  </div>
                  <div
                    className="4u"
                  >
                    <span className="image fit">
                      <img
                        src={penulisGambarUrl}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="12u">
            <span className="image fit">
              <img
                src={gambarUrl}
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="row">
          <AlphaBarisKolom
            lebar="12"
          >
            <blockquote>
              {deskripsi}
            </blockquote>
          </AlphaBarisKolom>
        </div>
        <div className="row">
          <div
            className="12u"
          >
            <AlphaTindakanHorizontal
              gaya={{
                textAlign:'end'
              }}
            >
              <AlphaLis>
                <p
                  className="icon fa-check-circle">
                </p>
              </AlphaLis>
              <AlphaLis>
                <p><b>{disukai}</b></p>
              </AlphaLis>
              <AlphaLis>
                <p
                  className="icon fa-eye">
                </p>
              </AlphaLis>
              <AlphaLis>
                <p><b>{dilihat}</b></p>
              </AlphaLis>
              {aksi?(
                <AlphaLis>
                  <p
                    onClick={()=>{
                      this.props.klikHapus(primer)
                    }}
                  ><b>Hapus</b></p>
                </AlphaLis>
              ):(
                <AlphaLis/>
              )}
            </AlphaTindakanHorizontal>
          </div>
        </div>
      </section>
    )
  }
}
export default AlphaArtikelKecil