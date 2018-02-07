import React,{Component} from "react"
import mobxStore from "../../../../../../mobx/mobxStore";
import AlphaKotak from "../../../tampilan/AlphaKotak";
import AlphaUtama from "../../../tampilan/AlphaUtama";
import {Observer} from "mobx-react/custom.module"
import {Link} from "react-router-dom";
import AlphaTombolSpesial from "../../../tampilan/AlphaTombolSpesial";
import ApiHelper from "../../../../../../helper/ApiHelper";
import BantuanWaktu from "../../../../../../bantuan/BantuanWaktu";
import AlphaArtikelKecil from "../../../tampilan/AlphaArtikelKecil";
import AlphaPaginasi from "../../../tampilan/AlphaPaginasi";
class AlphaPenulisArtikelSemua extends Component {
  static loadData(hal){
    ApiHelper.penulisArtikelSayaSemuaPaginasi(3,hal)
  }
  componentWillMount(){
    AlphaPenulisArtikelSemua.loadData(this.props.match.params.hal)
  }
  componentWillReceiveProps(nextProps){
    if(
      this.props.match.params.hal===nextProps.match.params.hal
    ){

    }else{
      AlphaPenulisArtikelSemua.loadData(nextProps.match.params.hal);
    }
  }
  render() {
    return (
      <Observer>
        {()=>{
          const jumlah=mobxStore.penulisArtikelSayaSemuaPaginasi.total;
          const hal=parseInt(this.props.match.params.hal);
          const halTerakhir=parseInt(mobxStore.penulisArtikelSayaSemuaPaginasi.last_page);
          const url='/penulis/artikel/semua/';
          const artikelLis=mobxStore.penulisArtikelSayaSemuaPaginasi.data.map((item,index)=>{
            const primer=item.id;
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
                primer={primer}
                klikHapus={(nilai)=>{
                  ApiHelper.penulisArtikelHapus(nilai,()=>{
                    this.loadData()
                  })
                }}
                aksi={true}
                url={url}
                judul={judul}
                deskripsi={deskripsi}
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
              <AlphaKotak>
                <h3>Artikel</h3>
                <Link
                  to={'/penulis/artikel/buat'}
                >
                  <AlphaTombolSpesial>
                    Buat Artikel
                  </AlphaTombolSpesial>
                </Link>
              </AlphaKotak>
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
}
export default AlphaPenulisArtikelSemua