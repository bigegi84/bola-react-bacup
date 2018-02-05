import React from 'react'
import AlphaTindakanVertikal from "./AlphaTindakanVertikal";
import AlphaLis from "./AlphaLis";
import AlphaGaris from "./AlphaGaris";
import AlphaTombolPasSpesial from "./AlphaTombolPasSpesial";
import BantuanDasar from "../../../../helper/BantuanDasar";
import AppHistory from "../../../../imperfect/component/AppHistory";
import {Link} from "react-router-dom";
class AlphaMenuPenulis extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="12u 12u(narrower) 12u$(mobilep)">
          <h3>Pengaturan</h3>
          <AlphaTindakanVertikal>
            <AlphaLis>
              <Link
                to={'/penulis/profil'}
              >
                <AlphaTombolPasSpesial>
                  Profil
                </AlphaTombolPasSpesial>
              </Link>
            </AlphaLis>
            <AlphaLis>
              <AlphaTombolPasSpesial
                diKlik={()=>{
                  BantuanDasar.keluar();
                  AppHistory.push('/')
                }}
              >
                Keluar
              </AlphaTombolPasSpesial>
            </AlphaLis>
          </AlphaTindakanVertikal>
          <AlphaGaris/>
          <h3>Penulis</h3>
          <AlphaTindakanVertikal>
            <AlphaLis>
              <Link
                to={'/penulis/artikel/semua/1'}
              >
                <AlphaTombolPasSpesial>
                  Artikel
                </AlphaTombolPasSpesial>
              </Link>
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
    )
  }
}
export default AlphaMenuPenulis