import React from 'react'
import AlphaGaris from "./AlphaGaris";
import AlphaMenuTamu from "./AlphaMenuTamu";
import AlphaMenuPenulis from "./AlphaMenuPenulis";
import BantuanDasar from "../../../../helper/BantuanDasar";
class AlphaMenuSisi extends React.Component{
  render(){
    const masuk=BantuanDasar.cekMasuk();
    let tampilanMenuSisi=(<AlphaMenuTamu/>);
    if(masuk){
      tampilanMenuSisi=(<AlphaMenuPenulis/>)
    }
    return(
      <div className="4u 12u$(small)">
        <section className="box">
          <h3>Menu</h3>
          <AlphaGaris/>
          {tampilanMenuSisi}
        </section>
      </div>
    )
  }
}
export default AlphaMenuSisi