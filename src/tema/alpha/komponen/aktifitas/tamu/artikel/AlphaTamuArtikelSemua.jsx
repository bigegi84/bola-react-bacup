import React,{Component} from "react"
import {Observer} from "mobx-react/custom.module";
import AlphaUtama from "../../../tampilan/AlphaUtama";
import AlphaArtikelKecil from "../../../tampilan/AlphaArtikelKecil";
import mobxStore from "../../../../../../mobx/mobxStore";
import ApiHelper from "../../../../../../helper/ApiHelper";
import AlphaPaginasi from "../../../tampilan/AlphaPaginasi";
import BantuanTanggal from "../../../../../../bantuan/BantuanTanggal";
import BantuanWaktu from "../../../../../../bantuan/BantuanWaktu";
export default class AlphaTamuArtikelSemua extends Component {
  ambilData(hal){
    ApiHelper.getTamuArtikelSemuaPaginasi(hal);
  }
  componentWillMount(){
    this.ambilData(this.props.match.params.hal);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.match.params.hal!==nextProps.match.params.hal)
      this.ambilData(nextProps.match.params.hal);
  }
  render() {
    const hal=parseInt(this.props.match.params.hal);
    return (
      <Observer>
        {()=>{
          const jumlah=mobxStore.tamuArtikelPaginasi.total;
          const url='/tamu/';
          // const halTerakhir=mobxStore.tamuArtikelPaginasi.last_page;
          const hal=this.props.match.params.hal;
          // const sebelumView=TampilanHelper.ambilTampilanSebelumnya(url,hal);
          // const lanjutView=TampilanHelper.ambilTampilanLanjut(url,hal,halTerakhir);
          const artikelLis=mobxStore.tamuArtikelPaginasi.data.map((item,index)=>{
            const judul=item.judul;
            const waktu=BantuanWaktu.waktuYangLalu(item.waktu);
            const konten=item.konten;
            const dilihat=item.dilihat;
            const disukai=item.disukai;
            const gambarUrl=item.gambar.url;
            const penulis=item.manusia.pengguna;
            const penulisGambarUrl=item.manusia.gambar.url;
            return(
              <AlphaArtikelKecil
                key={index}
                judul={judul}
                waktu={waktu}
                konten={konten}
                dilihat={dilihat}
                disukai={disukai}
                gambarUrl={gambarUrl}
                penulis={penulis}
                penulisGambarUrl={penulisGambarUrl}
              />
            )
          });
          return(
            <AlphaUtama>
              {artikelLis}
              <AlphaPaginasi
                jumlah={jumlah}
              />
            </AlphaUtama>
          )
        }}
      </Observer>
    )
  }
};