import React from 'react'
import AlphaTindakanHorizontal from "./AlphaTindakanHorizontal";
import AlphaLis from "./AlphaLis";
import AlphaBarisKolom from "./AlphaBarisKolom";
import AlphaBaris from "./AlphaBaris";
import AlphaKolom from "./AlphaKolom";
class AlphaArtikelSatu extends React.Component{
  render(){
    const judul=this.props.judul;
    const waktu=this.props.waktu;
    let deskripsi=this.props.deskripsi;
    const menu=this.props.menu;
    let konten=this.props.konten;
    if(konten!==null&&typeof konten!=='undefined'){
      let split=this.props.konten;
      split=split.split('<br />');
      konten=split.map((item,index)=>{
        return(
          <p
            key={index}
            style={{textAlign:'justify'}}
          >
            {item}
          </p>
        )
      });
    }
    const dilihat=this.props.dilihat;
    const disukai=this.props.disukai;
    const gambarUrl=this.props.gambarUrl;
    const penulis=this.props.penulis;
    const penulisGambarUrl=this.props.penulisGambarUrl;
    return(
      <section className="box">
        <AlphaBarisKolom
          lebar="12"
        >
          <div className="row">
            <div className="6u">
              <h3
                style={{}}
              >
                <b>
                  {judul}
                </b>
              </h3>
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
        </AlphaBarisKolom>
        <AlphaBarisKolom
          lebar="12"
        >
          <span className="image fit">
              <img
                src={gambarUrl}
                alt=""
              />
            </span>
        </AlphaBarisKolom>
        <AlphaBarisKolom
          lebar="12"
        >
          <blockquote>
            {deskripsi}
          </blockquote>
        </AlphaBarisKolom>
        <AlphaBarisKolom
          lebar="12"
        >
          {konten}
        </AlphaBarisKolom>
        <AlphaBaris
        >
          <AlphaKolom
            lebar="6"
          >
            <AlphaTindakanHorizontal
            >
              <AlphaLis>
                {menu}
              </AlphaLis>
            </AlphaTindakanHorizontal>
          </AlphaKolom>
          <AlphaKolom
            lebar="6"
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
            </AlphaTindakanHorizontal>
          </AlphaKolom>
        </AlphaBaris>
      </section>
    )
  }
}
export default AlphaArtikelSatu