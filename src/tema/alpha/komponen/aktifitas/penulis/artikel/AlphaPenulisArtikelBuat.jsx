import React,{Component} from "react"
import AlphaFormulirLabelTeks from "../../../formulir/AlphaFormulirLabelTeks";
import mobxStore from "../../../../../../mobx/mobxStore";
import AlphaKotak from "../../../tampilan/AlphaKotak";
import AlphaUtama from "../../../tampilan/AlphaUtama";
import {Observer} from "mobx-react/custom.module"
import AlphaTombolSpesial from "../../../tampilan/AlphaTombolSpesial";
import ApiHelper from "../../../../../../helper/ApiHelper";
import AppHistory from "../../../../../../imperfect/component/AppHistory";
import AlphaFormulirArtikel from "../../../formulir/AlphaFormulirArtikel";
class AlphaPenulisArtikelBuat extends Component {
  componentWillMount(){
    mobxStore.penulisArtikelBuat.id_menu=1
  }
  render() {
    return (
      <Observer>
        {()=>{
          let menu=mobxStore.menu;
          menu=menu.map((item)=>{
            return{
              nama:item.nama,
              nilai:item.id
            }
          })
          return(
            <AlphaUtama>
              <AlphaKotak>
                <h3>Buat Artikel</h3>
                <AlphaFormulirArtikel
                  nilaiJudul={mobxStore.penulisArtikelBuat.judul}
                  nilaiDeskripsi={mobxStore.penulisArtikelBuat.deskripsi}
                  nilaiKonten={mobxStore.penulisArtikelBuat.konten}
                  nilaiMenu={menu}
                  nilaiGambar={mobxStore.penulisArtikelBuat.gambar}
                  perubahanJudul={(nilai)=>{
                    mobxStore.penulisArtikelBuat.judul=nilai
                  }}
                  perubahanDeskripsi={(nilai)=>{
                    mobxStore.penulisArtikelBuat.deskripsi=nilai
                  }}
                  perubahanKonten={(nilai)=>{
                    mobxStore.penulisArtikelBuat.konten=nilai
                  }}
                  perubahanMenu={(nilai)=>{
                    mobxStore.penulisArtikelBuat.id_menu=nilai
                  }}
                  perubahanGambar={(nilai)=>{
                    mobxStore.penulisArtikelBuat.gambar=nilai
                  }}
                />
                <AlphaTombolSpesial
                  diKlik={()=>{
                    ApiHelper.penulisArtikelBuat(()=>{
                      AppHistory.push('/penulis/artikel/semua/1')
                    })
                  }}
                >
                  Buat
                </AlphaTombolSpesial>
              </AlphaKotak>
            </AlphaUtama>
          )
        }}
      </Observer>
    )
  }
}
export default AlphaPenulisArtikelBuat