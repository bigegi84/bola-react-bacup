import React,{Component} from "react"
import AlphaFormulirLabelTeks from "../../formulir/AlphaFormulirLabelTeks";
import mobxStore from "../../../../../mobx/mobxStore";
import AlphaKotak from "../../tampilan/AlphaKotak";
import AlphaUtama from "../../tampilan/AlphaUtama";
import {Observer} from "mobx-react/custom.module"
import AlphaTombolSpesial from "../../tampilan/AlphaTombolSpesial";
import ApiHelper from "../../../../../helper/ApiHelper";
import AppHistory from "../../../../../imperfect/component/AppHistory";
import AlphaBarisKolom from "../../tampilan/AlphaBarisKolom";
import AlphaGambarPas from "../../tampilan/AlphaGambarPas";
import FileBase64 from "react-file-base64";
import 'croppie/croppie.css'
import AlphaPotongGambar from "../../tampilan/AlphaPotongGambar";
import AlphaBaris from "../../tampilan/AlphaBaris";
import AlphaKolom from "../../tampilan/AlphaKolom";
import BantuanDasar from "../../../../../helper/BantuanDasar";
class AlphaPenulisProfil extends Component {
  state={
    croppie:''
  }
  componentWillMount(){
    ApiHelper.penulisManusiaSaya(()=>{

    })
  }
  render() {
    return (
      <Observer>
        {()=>{
          return(
            <AlphaUtama>
              <AlphaKotak>
                <h3>Profil</h3>
                <AlphaBarisKolom
                  lebar="12"
                >
                  <AlphaBaris>
                    <AlphaKolom
                      lebar="6"
                    >
                      Pilih gambar
                      <FileBase64
                        multiple={false}
                        onDone={(file)=>{
                          this.setState({croppie:file.base64})
                        }}
                      />
                      {this.state.croppie ? (
                        <AlphaBarisKolom
                          lebar="12"
                        >
                          <AlphaPotongGambar
                            width={200}
                            height={200}
                            base64={this.state.croppie}
                            handler={(base64)=>{
                              mobxStore.penulisManusiaSayaTambal.kolom='gambar';
                              mobxStore.penulisManusiaSayaTambal.nilai=base64
                            }}
                          />
                          <AlphaTombolSpesial
                            diKlik={()=>{
                              if(mobxStore.penulisManusiaSayaTambal.nilai!==''){
                                ApiHelper.penulisManusiaSayaTambal((pesan)=>{
                                  mobxStore.croppie='';
                                  // BantuanDasar(pesan);
                                })
                              }else{
                                BantuanDasar.dasarKegagalan('Gambar Kosong');
                              }
                            }}
                          >
                            Ubah Gambar
                          </AlphaTombolSpesial>
                        </AlphaBarisKolom>
                      ):(
                        <div/>
                      )}
                    </AlphaKolom>
                    <AlphaKolom
                      lebar="6"
                    >
                      <AlphaGambarPas
                        sumber={mobxStore.penulisManusiaSaya.gambar.url}
                      />
                    </AlphaKolom>
                  </AlphaBaris>
                </AlphaBarisKolom>
                <AlphaFormulirLabelTeks
                  label='Nilai'
                  tipe="text"
                  nilai={mobxStore.tamuMasuk.nilai}
                  dalamPerubahan={(e)=>{
                    mobxStore.tamuMasuk.nilai=e.target.value
                  }}
                />
                <AlphaFormulirLabelTeks
                  label='Sandi'
                  tipe="text"
                  nilai={mobxStore.tamuMasuk.sandi}
                  dalamPerubahan={(e)=>{
                    mobxStore.tamuMasuk.sandi=e.target.value
                  }}
                />
                <AlphaTombolSpesial
                  diKlik={()=>{
                    ApiHelper.tamuMasuk(()=>{
                      AppHistory.push('/tamu/artikel/semua/1')
                    });
                  }}
                >
                  Masuk
                </AlphaTombolSpesial>
              </AlphaKotak>
            </AlphaUtama>
          )
        }}
      </Observer>
    )
  }
};
export default AlphaPenulisProfil