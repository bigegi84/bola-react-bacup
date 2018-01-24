import React from 'react'
class AlphaArtikelKecil extends React.Component{
  render(){
    const judul=this.props.judul;
    const waktu=this.props.waktu;
    const konten=this.props.konten;
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
          </div>
          <div className="12u">
            <span className="image fit">
              <img
                src={gambarUrl}
                alt=""
              />
            </span>
          </div>
          <div
            className="12u"
          >
            <p
              style={{textAlign:'justify'}}
            >
              {konten}
            </p>
          </div>
        </div>
        <div className="row">

        </div>
        <div className="row">
          <div
            className="12u"
          >
            <ul
              style={{
                textAlign:'end'
              }}
              className="icons">
              <li>
                <a
                  className="icon fa-check-circle">
                  <h5><b>{disukai}</b></h5>
                </a>
              </li>
              <li
                style={{verticalAlign:'top'}}
              >
                <a
                  className="icon fa-eye">
                  <h5><b>{dilihat}</b></h5>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
export default AlphaArtikelKecil