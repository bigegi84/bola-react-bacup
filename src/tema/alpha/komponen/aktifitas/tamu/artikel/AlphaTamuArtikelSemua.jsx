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
    ApiHelper.getTamuArtikelSemuaPaginasi(hal,3);
  }
  componentWillMount(){
    this.ambilData(this.props.match.params.hal);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.match.params.hal!==nextProps.match.params.hal)
      this.ambilData(nextProps.match.params.hal);
  }
  render() {
    return (
      <Observer>
        {()=>{
          const jumlah=mobxStore.tamuArtikelPaginasi.total;
          const hal=this.props.match.params.hal;
          const halTerakhir=parseInt(mobxStore.tamuArtikelPaginasi.last_page);
          const url='/tamu/artikel/semua/';
          const artikelLis=mobxStore.tamuArtikelPaginasi.data.map((item,index)=>{
            const judul=item.judul;
            const url='/tamu/artikel/satu/'+item.slug;
            const waktu=BantuanWaktu.waktuYangLalu(item.waktu);
            const deskripsi=item.deskripsi;
            const dilihat=item.dilihat;
            const disukai=item.disukai;
            const gambarUrl=item.gambar.url;
            const penulis=item.manusia.pengguna;
            const penulisGambarUrl=item.manusia.gambar.url;
            return(
              <AlphaArtikelKecil
                key={index}
                url={url}
                judul={judul}
                waktu={waktu}
                deskripsi={deskripsi}
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
                url={url}
                halaman={hal}
                halamanTerakhir={halTerakhir}
                jumlah={jumlah}
              />
            </AlphaUtama>
          )
        }}
      </Observer>
    )
  }
};