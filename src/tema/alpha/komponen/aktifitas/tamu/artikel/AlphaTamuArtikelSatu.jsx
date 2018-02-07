import React,{Component} from "react"
import {Observer} from "mobx-react/custom.module";
import AlphaArtikelSatu from "../../../tampilan/AlphaArtikelSatu";
import mobxStore from "../../../../../../mobx/mobxStore";
import ApiHelper from "../../../../../../helper/ApiHelper";
import BantuanWaktu from "../../../../../../bantuan/BantuanWaktu";
import AlphaUtama from "../../../tampilan/AlphaUtama";
class AlphaTamuArtikelSatu extends Component {
  componentWillMount(){
    this.loadData()
  }
  loadData(pertama=true){
    ApiHelper.tamuArtikelSatu('slug',this.props.match.params.slug,pertama)
  }
  render() {
    return (
      <Observer>
        {()=>{
          const data=mobxStore.tamuArtikelSatu;
          const judul=data.judul;
          const waktu=BantuanWaktu.waktuYangLalu(data.waktu);
          const deskripsi=data.deskripsi;
          const konten=data.konten;
          const menu=data.menu.nama;
          const dilihat=data.dilihat;
          const disukai=data.disukai;
          const gambarUrl=data.gambar.url;
          const penulis=data.manusia.pengguna;
          const penulisGambarUrl=data.manusia.gambar.url;
          return(
            <AlphaUtama>
              <AlphaArtikelSatu
                judul={judul}
                menu={menu}
                deskripsi={deskripsi}
                waktu={waktu}
                konten={konten}
                dilihat={dilihat}
                disukai={disukai}
                gambarUrl={gambarUrl}
                penulis={penulis}
                penulisGambarUrl={penulisGambarUrl}
                klikSuka={()=>{
                  ApiHelper.tamuArtikelSatuSuka(
                    'slug',
                    this.props.match.params.slug,
                    ()=>{
                      this.loadData(false)
                    }
                  )
                }}
              />
            </AlphaUtama>
          )
        }}
      </Observer>
    )
  }
};
export default AlphaTamuArtikelSatu