import React from 'react'
import AlphaTindakanVertikal from "./AlphaTindakanVertikal";
import AlphaLis from "./AlphaLis";
import AlphaGaris from "./AlphaGaris";
class BarSisi extends React.Component{
  render(){
    let lis=[
      'Profil'
    ];
    lis=lis.map((item,index)=>{
      return(
        <AlphaLis>
          <a>{item}</a>
        </AlphaLis>
      )
    });
    return(
      <div className="4u 12u$(small)">
        <section className="box">
          <h3>Menu</h3>
          <AlphaGaris/>
          <div className="row">
            <div className="12u 12u(narrower) 12u$(mobilep)">
              <h3>Pengaturan</h3>
              <AlphaTindakanVertikal>
                <AlphaLis>
                  Profil
                </AlphaLis>
                <AlphaLis>
                  Keluar
                </AlphaLis>
              </AlphaTindakanVertikal>
              <AlphaGaris/>
              <h3>Penulis</h3>
              <AlphaTindakanVertikal>
                <AlphaLis>
                  Artikel
                </AlphaLis>
              </AlphaTindakanVertikal>
              <AlphaGaris/>
              <h3>Pegurus</h3>
              <AlphaTindakanVertikal>
                <AlphaLis>
                  Menu
                </AlphaLis>
                <AlphaLis>
                  Variabel
                </AlphaLis>
                <AlphaLis>
                  Manusia
                </AlphaLis>
              </AlphaTindakanVertikal>
              <AlphaGaris/>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default BarSisi