import React,{Component} from "react"
import {Observer} from "mobx-react/custom.module";
import AlphaUtama from "../../../tampilan/AlphaUtama";
import AlphaArtikelKecil from "../../../tampilan/AlphaArtikelKecil";
import mobxStore from "../../../../../../mobx/mobxStore";
import ApiHelper from "../../../../../../helper/ApiHelper";
import AlphaPaginasi from "../../../tampilan/AlphaPaginasi";
import BantuanTanggal from "../../../../../../bantuan/BantuanTanggal";
import BantuanWaktu from "../../../../../../bantuan/BantuanWaktu";
export default class AlphaTamuMenuArtikelSemua extends Component {
  ambilData(slug,hal){
    ApiHelper.getTamuMenuArtikelPaginasi(slug,hal,3);
  }
  componentWillMount(){
    this.ambilData(this.props.match.params.slug,this.props.match.params.page);
  }
  componentWillReceiveProps(nextProps){
    if(
      this.props.match.params.slug===nextProps.match.params.slug&&
      this.props.match.params.page===nextProps.match.params.page
    ){

    }else{
      this.ambilData(nextProps.match.params.slug,nextProps.match.params.page);
    }
  }
  render() {
    return (
      <Observer>
        {()=>{
          const slug=this.props.match.params.slug;
          const respon=mobxStore.tamuMenuArtikelPaginasi;
          const jumlah=respon.total;
          const hal=this.props.match.params.page;
          const halTerakhir=parseInt(respon.last_page);
          const url='/tamu/menu/'+slug+'/';
          const artikelLis=respon.data.map((item,index)=>{
            const judul=item.judul;
            const url='/tamu/artikel/satu/'+item.slug;
            const waktu=BantuanWaktu.waktuYangLalu(item.waktu);
            const konten=item.konten;
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