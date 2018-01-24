import React from 'react'
class AlphaPaginasi extends React.Component{
  render(){
    const jumlah=this.props.jumlah;
    return(
      <section className="box">
        <div
          className="row"
        >
          <div
            className="12u"
          >
            <h4>Halaman: {jumlah}</h4>
            <ul className="actions fit">
              <li><a href="#" className="button special fit">Sebelumnya</a></li>
              <li><a href="#" className="button fit">Selanjutnya</a></li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
export default AlphaPaginasi