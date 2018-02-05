import React from 'react'
import AlphaTombolPasNonaktif from "./AlphaTombolPasNonaktif";
import {Link} from "react-router-dom";
import AlphaTombolPasSpesial from "./AlphaTombolPasSpesial";
class AlphaPaginasi extends React.Component{
  render(){
    const halaman=parseInt(this.props.halaman);
    const halamanTerakhir=parseInt(this.props.halamanTerakhir);
    const jumlah=this.props.jumlah;
    const url=this.props.url;

    const halamanSelanjutnya=halaman+1;
    const halamanSebelumnya=halaman-1;
    let selanjutnya=true;
    if(halaman>=halamanTerakhir||halamanTerakhir===0){
      selanjutnya=false
    }
    let tampilanSelajutnya=(
      <AlphaTombolPasNonaktif>
        Selanjutnya
      </AlphaTombolPasNonaktif>
    );

    if(selanjutnya){
      tampilanSelajutnya=
        (
          <Link
            className='button fit special'
            to={url+halamanSelanjutnya}
          >
              Selanjutnya
          </Link>
        )
    }
    let sebelum=true;
    if(halaman<=1){
      sebelum=false
    }
    let tampilanSebelumnya=(
      <AlphaTombolPasNonaktif>
        Sebelumnya
      </AlphaTombolPasNonaktif>
    );
    if(sebelum){
      tampilanSebelumnya=(
        <Link
          className='button fit special'
          to={url+halamanSebelumnya}
        >
            Sebelumnya
        </Link>
      )
    }
    return(
      <section className="box">
        <div
          className="row"
        >
          <div
            className="12u"
          >
            <h4>Halaman: {halaman}</h4>
            <h4>Jumlah: {jumlah}</h4>
            <ul className="actions fit">
              <li>
                {tampilanSebelumnya}
              </li>
              <li>
                {tampilanSelajutnya}
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
export default AlphaPaginasi