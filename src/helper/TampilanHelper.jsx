import React from 'react';
import {Link} from "react-router-dom";
const sebelumnya='Sebelumnya';
const selanjutnya='Selanjutnya';
class TampilanHelper{
  static ambilTampilanLanjut(url,hal,halTerakhir){
    hal=parseInt(hal);
    halTerakhir=parseInt(halTerakhir);
    const lanjut_hal=hal+1;
    let lanjut=true;
    console.log('terakhir',halTerakhir)
    if(hal>=halTerakhir||halTerakhir===0){
      lanjut=false
    }
    let lanjutView=(
      <a className="disabled button big next">
        {selanjutnya}
      </a>
    );
    if(lanjut){
      lanjutView=(
        <Link
          className="button big next"
          to={url+lanjut_hal}
          replace
        >
          {selanjutnya}
        </Link>
      )
    }
    return lanjutView;
  }
  static ambilTampilanSebelumnya(url,hal){
    const sebelum_hal=hal-1;
    let sebelum=true;
    if(hal<=1){
      sebelum=false
    }
    let sebelumView=(
      <a className="disabled button big previous">
        {sebelumnya}
      </a>
    );
    if(sebelum){
      sebelumView=(
        <Link
          className="button big previous"
          to={url+sebelum_hal}
          replace
        >
          {sebelumnya}
        </Link>
      )
    }
    return sebelumView
  }
}
export default TampilanHelper